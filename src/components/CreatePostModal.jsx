import { Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, ModalBody,Textarea, ModalFooter,Flex,Box,FormLabel,Input, Button, useToast,IconButton, ButtonGroup } from "@chakra-ui/react";
import { useState } from "react";
import {BsCardImage} from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import { saveImageToCloudinary } from "../services";
import { createPost } from "../redux/asyncThunks";


const CreatePostModal = ({isOpen, onClose}) =>{
    
    const {token} = useSelector(state=> state.auth);
    const dispatch = useDispatch();
    const [userPost, setUserPost] = useState({content: ""});
    const [userPostImg, setUserPostImg] = useState({imageUrl: "", imageFile: {}});
    const toast = useToast();

    let reader = new FileReader();

    const addImageHandler = (e) => {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        if (reader.readyState === 2) {
          setUserPostImg({ imageUrl: reader.result, imageFile: e.target.files[0] });
        }
      };
    };
  
    const createPostHandler = async () => {
      if (userPostImg.imageUrl !== "") {
        await saveImageToCloudinary(userPostImg.imageFile, setUserPost);
      }
      const postData = {
        content: userPost.content,
        img: userPost.avatarImg || userPostImg.imageUrl || null,
      };
  
      const response = await dispatch(createPost({ postData, token }));
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
      setUserPost({ content: "" });
      setUserPostImg({ imageUrl: "", imageFile: {} });
      onClose();
    };
  
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add Post</ModalHeader>
                <ModalCloseButton />
                <ModalBody size="lg">
                    <Textarea
                        placeholder="Write Whatever you feel like sharing"
                        size="lg"
                        resize="none"
                        value= {userPost.content}
                        onChange={(e) =>
                            setUserPost((prev) => ({ ...prev, content: e.target.value }))
                          }
                    />
                </ModalBody>
                <ModalFooter>
                    <Flex justifyContent ="space-between" w="100%" alignItems="center">

                  
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
                    Image
                  </Button>
                  <IconButton
                    aria-label="Add to friends"
                    icon={<GrFormClose />}
                    fontSize="25px"
                    onClick={() => setUserPostImg({ imageUrl: "", imageFile: {} })}
                  />
                </ButtonGroup>
              ) : null}
                    </Box>
                    <Button onClick={createPostHandler}> 
                        POST
                    </Button>
                    </Flex>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export {CreatePostModal}