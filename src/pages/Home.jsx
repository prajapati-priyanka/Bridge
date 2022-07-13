import {
  Flex,
  useDisclosure,
  Box,
  Heading,
  CircularProgress,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SideNav,
  PostCard,
  SuggestedUsersSidebar,
  CreatePostModal,
  Header,
  MobileNav,
} from "../components";
import { getAllPosts } from "../redux/asyncThunks";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state) => state.posts);
  const { user } = useSelector((state) => state.auth);
  const [editedPost, setEditedPost] = useState(null);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const userFeed = posts.filter(
    (item) =>
      user.username === item.username ||
      user.following.some((follower) => follower.username === item.username)
  );

  return (
    <>
      {isOpen ? (
        <CreatePostModal
          isOpen={isOpen}
          onClose={onClose}
          editedPost={editedPost}
          setEditedPost={setEditedPost}
        />
      ) : null}
      <Header onOpen={onOpen} />
      <>
        {isLoading ? (
          <CircularProgress
            isIndeterminate
            color="brand.500"
            position="fixed"
            top="50%"
            left="50%"
            size="80px"
            thickness="10px"
          />
        ) : (
          <>
            <Flex
              bg="var(--bg-color)"
              w="100%"
              gap="10"
              minH="100vh"
              pl={{ base: "3", lg: "6" }}
              pr={{ base: "3", lg: "6" }}
            >
              <SideNav />
              {userFeed.length !== 0 ? (
                <Flex
                  flexDirection="column"
                  gap="5"
                  flexGrow="1"
                  maxW="50rem"
                  mt="6rem"
                  mb="2rem"
                >
                  {[...userFeed].reverse().map((post) => (
                    <PostCard
                      key={post._id}
                      post={post}
                      onOpen={onOpen}
                      setEditedPost={setEditedPost}
                    />
                  ))}
                </Flex>
              ) : (
                <Flex w="50rem" justifyContent="center" alignItems="center">
                  <Heading as="h3" size="md" textAlign="center">
                    No posts to display, start posting and following other users
                    to update your feed.
                  </Heading>
                </Flex>
              )}

              <SuggestedUsersSidebar />
            </Flex>
            <Box
              position="sticky"
              bottom="0"
              left="0"
              right="0"
              h="50px"
              bgColor="brand.100"
              display={{ base: "block", md: "none" }}
              zIndex="2"
            >
              <MobileNav onOpen={onOpen} />
            </Box>
          </>
        )}
      </>
    </>
  );
};

export { Home };
