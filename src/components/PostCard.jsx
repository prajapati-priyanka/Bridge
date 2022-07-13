import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  PopoverBody,
  Text,
  Image,
  useToast,
  AspectRatio,
} from "@chakra-ui/react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdFavoriteBorder, MdOutlineBookmarkBorder } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { CommentCard } from "./CommentCard";
import { CommentInput } from "./CommentInput";
import { useNavigate } from "react-router-dom";
import { deletePost, likePost, dislikePost } from "../redux/asyncThunks";
import { FcLike } from "react-icons/fc";

const PostCard = ({ post, onOpen, setEditedPost }) => {
  const { user, token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const {isLikeLoading} = useSelector(state=>state.posts);

  const deletePostHandler = async (post) => {
    const response = await dispatch(deletePost({ post, token }));
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


  const editPostHandler = (post) => {
    setEditedPost(post);
    onOpen();
  };

  const isPostLiked = post?.likes.likedBy.some(
    (currentUser) => currentUser._id === user._id
  );

  const likeHandler = async (postId) => {
    isLiked
      ? await dispatch(dislikePost({ postId, token }))
      : await dispatch(likePost({ postId, token }));
  };

  return (
    <Flex flexDirection="column" gap="2" bg="white" p="4" borderRadius="20">
      {/* Avatar and name */}
      <Flex justifyContent="space-between">
        <Flex
          cursor="pointer"
          gap="2"
          alignItems="center"
          onClick={() => navigate(`/profile/${post.username}`)}
        >
          <Avatar
            name={post.firstName + " " + post.lastName}
            src={
              post.username === user.username ? user.avatarUrl : post.avatarUrl
            }
          />
          <Heading as="h4" size="sm">
            {post.firstName} {post.lastName}
            <Text fontSize="12px" color="gray.400" fontWeight="400" mt="1">
              @{post.username}
            </Text>
          </Heading>
        </Flex>
        {user.username === post.username ? (
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
                  onClick={()=>editPostHandler(post)}
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

                  onClick={()=>deletePostHandler(post)}
                >
                  Delete
                </Button>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        ) : null}
      </Flex>

      {/* Post Content  */}
      <Box>
        <Text>{post.content}</Text>
        
        {post?.img && !post.img.includes("jpg" || "png" || "gif" || "webp") ? (<AspectRatio height={"500px"} w="full" maxW="full" ratio={16/9}>
          <video controls src={post.img} ></video>

        </AspectRatio>): (<Image w="full" maxW="full" objectFit="cover" src={post.img} ></Image>)}
      </Box>

      {/* Like and Bookmark */}

      <Flex justifyContent="space-between" alignItems="center">
        <Flex alignItems="center">
          <IconButton
            icon={isPostLiked ? <FcLike /> : <MdFavoriteBorder />}
            bgColor="transparent"
            color={isPostLiked ? "red.400" : "black"}
            size="sm"
            fontSize="lg"
            borderRadius="50%"
            _hover={{
              bgColor: "red.100",
            }}
            _active={{
              bgColor: "red.100",
              borderColor: "transparent",
            }}
            _focus={{
              bgColor: "red.100",
              borderColor: "transparent",
            }}

            onClick ={()=> likeHandler(post._id)}
            isLoading= {isLikeLoading}
          />

          <Text>{post.likes.likeCount} likes</Text>
        </Flex>
        <IconButton
          icon={<MdOutlineBookmarkBorder />}
          bgColor="transparent"
          color="black"
          size="sm"
          fontSize="lg"
          borderRadius="50%"
          _hover={{
            bgColor: "red.100",
          }}
          _focus={{
            bgColor: "red.100",
            borderColor: "transparent",
          }}
          _active={{
            bgColor: "red.100",
            borderColor: "transparent",
          }}
        />
      </Flex>
      {/* comment Input */}
      <CommentInput />

      {/* Comments */}

      {post?.comments?.map((comment) => (
        <CommentCard key={comment._id} comment={comment} />
      ))}
    </Flex>
  );
};

export { PostCard };
