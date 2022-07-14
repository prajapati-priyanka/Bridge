import { Box, Flex, useDisclosure, CircularProgress, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import {
  Header,
  PostCard,
  SideNav,
  SuggestedUsersSidebar,
  MobileNav,
  CreatePostModal
} from "../components";
import { getAllPosts, getUserBookmarks } from "../redux/asyncThunks";

const Bookmark = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { bookmarks, token, bookmarkStatus } = useSelector(
    (state) => state.auth
  );

  const { posts, status, isLoading  } = useSelector((state) => state.posts);
  const [editedPost, setEditedPost] = useState(null);

  useEffect(() => {
    if (status === "idle") {
      dispatch(getAllPosts());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (bookmarkStatus === "idle") {
      dispatch(getUserBookmarks(token));
    }
  }, [dispatch, bookmarkStatus, token]);

  const bookmarkedPosts = posts.filter((currentPost) =>
    bookmarks.some((currPost) => currPost === currentPost._id)
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
            <SideNav onOpen={onOpen} />
            {bookmarkedPosts.length !== 0 ? (
              <Flex
                flexDirection="column"
                gap="5"
                flexGrow="1"
                maxW="50rem"
                mt="6rem"
                mb="2rem"
              >
                {[...bookmarkedPosts].reverse().map((post) => (
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
                  No posts to display, Nothing has been bookmarked
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

export { Bookmark };
