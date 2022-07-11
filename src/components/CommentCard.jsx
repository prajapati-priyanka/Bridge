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
} from "@chakra-ui/react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CommentCard = ({ comment }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  return (
    <Flex gap="2" mt="2">
      <Avatar
        name={comment.firstName + " " + comment.lastName}
        src={comment.username === user.username ? user.avatarUrl : comment.avatarUrl}
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
            {comment.text}
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
                >
                  Delete
                </Button>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        ) : null}
      </Flex>
    </Flex>
  );
};

export { CommentCard };
