import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalBody,
  Textarea,
  ModalFooter,
  Flex,
  Box,
  FormLabel,
  Input,
  Button,
  useToast,
  IconButton,
  ButtonGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsCardImage } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import { saveImageToCloudinary } from "../services";
import { createPost, editPost } from "../redux/asyncThunks";
import { setBtnLoading } from "../redux/slices";

const CreatePostModal = ({ isOpen, onClose, editedPost, setEditedPost }) => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const {isLoading} = useSelector(state => state.posts)
  const [userPost, setUserPost] = useState({ content: editedPost?.content || "" });
  const [userPostImg, setUserPostImg] = useState({
    imageUrl: editedPost?.img || "",
    imageFile: {},
  });
  const toast = useToast();
 
  let reader = new FileReader();

  const addImageHandler = (e) => {
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      if (reader.readyState === 2) {
        setUserPostImg({
          imageUrl: reader.result,
          imageFile: e.target.files[0],
        });
      }
    };
  };

  const saveCreatePostHandler = async (data) => {
    try {
      const response = await dispatch(createPost({ postData: data, token }));
      if (response?.payload.status === 201) {
        toast({
          description: "Post successfully added",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      } else {
        toast({
          description: `${response.payload.data.errors[0]}`,
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
      modalCloseHandler();
    } catch (error) {
      console.error(error);
    }
  };


  const createPostHandler = async () => {
    if (userPostImg.imageUrl !== "") {
      dispatch(setBtnLoading());
      const type = userPostImg.imageUrl.includes("video") ? "video" : "image";
      await saveImageToCloudinary(
        userPostImg.imageFile,
        saveCreatePostHandler,
        userPost,
        type,
        "post"
      );
    } else if (userPost.content !== "") {
      saveCreatePostHandler(userPost);
    } else {
      toast({
        description: "Post can't be blank",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const saveEditPostHandler = async (data) => {
    try {
      const postData = {
        _id: editedPost._id,
        content: data.content,
        img: data.img || null,
      };
     
      const response = await dispatch(editPost({ postData, token }));
      if (response?.payload.status === 201) {
        toast({
          description: "Post successfully edited",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      } else {
        toast({
          description: `${response.payload.data.errors[0]}`,
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
      modalCloseHandler();
    } catch (error) {
      console.error(error);
    }
  }
  const editPostHandler = async () => {
    if (userPostImg.imageUrl !== "" && userPostImg.imageUrl !== editedPost.img) {
      const type = userPostImg.imageUrl.includes("video") ? "video" : "image";
      await saveImageToCloudinary(
        userPostImg.imageFile,
        saveEditPostHandler,
        userPost,
        type,
        "post"
      );
    } else if (userPost.content !== "") {
      saveEditPostHandler(userPost);
    } else {
      toast({
        description: "Post can't be blank",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    }
  
  };

  const modalCloseHandler = () => {
    setUserPost({ content: "" });
    setUserPostImg({ imageUrl: "", imageFile: {} });
    setEditedPost({ content: "", img: "" });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Post</ModalHeader>
        <ModalCloseButton onClick={modalCloseHandler} />
        <ModalBody size="lg">
          <Textarea
            placeholder="Write Whatever you feel like sharing"
            size="lg"
            resize="none"
            value={userPost.content}
            onChange={(e) =>
              setUserPost((prev) => ({ ...prev, content: e.target.value }))
            }
          />
        </ModalBody>
        <ModalFooter>
          <Flex justifyContent="space-between" w="100%" alignItems="center">
            <Box>
              <FormLabel cursor="pointer">
                <Input
                  type="file"
                  accept="image/*,video/*"
                  position="absolute"
                  opacity="0"
                  bgColor="red.100"
                  p="0"
                  visibility="hidden"
                  onChange={addImageHandler}
                />
                <BsCardImage fontSize="28px" />
              </FormLabel>
              {userPostImg.imageUrl !== "" ? (
                <ButtonGroup size="sm" isAttached variant="outline">
                  <Button
                    _hover={{
                      borderColor: "initial",
                    }}
                    _active={{
                      borderColor: "initial",
                    }}
                  >
                   {userPostImg.imageUrl.includes("video") ? "Video" : "Image"}
                  </Button>
                  <IconButton
                    aria-label="Add to friends"
                    icon={<GrFormClose />}
                    fontSize="25px"
                    onClick={() =>
                      setUserPostImg({ imageUrl: "", imageFile: {} })
                    }
                  />
                </ButtonGroup>
              ) : null}
            </Box>
            <Button
            isLoading={isLoading}
              onClick={
                editedPost?.content || editedPost?.img
                  ? editPostHandler
                  : createPostHandler
              }
            >
              POST
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export { CreatePostModal };
