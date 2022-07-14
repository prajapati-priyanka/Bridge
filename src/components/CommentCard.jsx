import {
  Flex,
  Avatar,
  Box,
  Heading,
  Text,
  Popover,
  PopoverTrigger,
  IconButton,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Button,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { EditCommentModal } from "./EditCommentModal";
import { useState } from "react";
import { deleteComment } from "../redux/asyncThunks";


const CommentCard = ({ comment, postId }) => {
  const navigate = useNavigate();
  const { user, token } = useSelector((state) => state.auth);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const toast = useToast();
  const [editedComment, setEditedComment] = useState("");
  const [commentId, setCommentId] = useState(null);

  const editCommentHandler = () => {
    setCommentId(comment._id);
    setEditedComment(comment.commentData);
    onOpen();
  };

  const deleteCommentHandler = async () => {
    const response = await dispatch(
      deleteComment({ postId, commentId: comment._id, token })
    );
    if (response?.payload.status === 201) {
      toast({
        description: "Post successfully deleted",
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
  };

  return (
    <>
      {isOpen ? (
        <EditCommentModal
          isOpen={isOpen}
          onClose={onClose}
          editedComment={editedComment}
          setEditedComment={setEditedComment}
          commentId={commentId}
          setCommentId={setCommentId}
          postId={postId}
        />
      ) : null}
      <Flex gap="2" mt="2">
        <Avatar
          name={comment.firstName + " " + comment.lastName}
          src={
            comment.username === user.username
              ? user.avatarUrl
              : comment.avatarUrl
          }
          size="sm"
          cursor="pointer"
          onClick={() => navigate(`/profile/${comment.username}`)}
        />
        <Flex justifyContent="space-between" alignItems="center" w="100%">
          <Box>
            <Heading
              as="h5"
              size="sm"
              cursor="pointer"
              fontWeight="600"
              onClick={() => navigate(`/profile/${comment.username}`)}
            >
              {comment.firstName} {comment.lastName}
            </Heading>
            <Text fontSize="14px" mt="2">
              {comment.commentData}
            </Text>
          </Box>

          {user.username === comment.username ? (
            <Popover>
              <PopoverTrigger>
                <IconButton
                  icon={<BiDotsVerticalRounded />}
                  bgColor="transparent"
                  color="black"
                  size="sm"
                  fontSize="lg"
                  _hover={{
                    bgColor: "transparent",
                  }}
                  _active={{
                    bgColor: "transparent",
                    border: "none",
                  }}
                  _focus={{
                    bgColor: "transparent",
                    border: "none",
                  }}
                />
              </PopoverTrigger>
              <PopoverContent maxW="10rem">
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <Button
                    backgroundColor="transparent"
                    _hover={{ backgroundColor: "gray.200" }}
                    _active={{ border: "none", backgroundColor: "gray.100" }}
                    _focus={{ backgroundColor: "gray.100" }}
                    display="block"
                    w="60%"
                    onClick={editCommentHandler}
                  >
                    Edit
                  </Button>
                  <Button
                    backgroundColor="transparent"
                    _hover={{ backgroundColor: "gray.200" }}
                    _active={{ border: "none", backgroundColor: "gray.100" }}
                    _focus={{ backgroundColor: "gray.100" }}
                    display="block"
                    w="60%"
                    onClick={deleteCommentHandler}
                  >
                    Delete
                  </Button>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          ) : null}
        </Flex>
      </Flex>
    </>
  );
};

export { CommentCard };
