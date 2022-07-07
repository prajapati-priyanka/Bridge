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
} from "@chakra-ui/react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdFavoriteBorder, MdOutlineBookmarkBorder } from "react-icons/md";
import { useSelector } from "react-redux";
import { CommentCard } from "./CommentCard";
import { CommentInput } from "./CommentInput";
import { useNavigate } from "react-router-dom";

const PostCard = ({ post }) => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
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
              <Button variant="ghost" display="block" w="60%">
                Edit
              </Button>
              <Button variant="ghost" display="block" w="60%">
                Delete
              </Button>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>

      {/* Post Content  */}
      <Box>
        <Text>{post.content}</Text>
      </Box>

      {/* Like and Bookmark */}

      <Flex justifyContent="space-between" alignItems="center">
        <Flex alignItems="center">
          <IconButton
            icon={<MdFavoriteBorder />}
            bgColor="transparent"
            color="black"
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

      {post.comments.map((comment) => (
        <CommentCard key={comment._id} comment={comment} />
      ))}
    </Flex>
  );
};

export { PostCard };
