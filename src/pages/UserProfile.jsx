import { Box, Flex, useDisclosure, Heading} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { MobileNav } from "../components";
import {
  Header,
  PostCard,
  SideNav,
  SuggestedUsersSidebar,
  UserProfileCard,
} from "../components";
import { getAllPosts } from "../redux/asyncThunks/postsThunk";

const UserProfile = () => {
  const { onOpen } = useDisclosure();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  const userPosts = posts.filter((post) => post.username === user.username);

  return (
    <>
      <Header onOpen={onOpen} />
      <Flex
        bg="var(--bg-color)"
        w="100%"
        gap="10"
        minHeight="100vh"
        pl="6"
        pr="6"
      >
        <SideNav />
        <Flex
          flexDirection="column"
          gap="5"
          flexGrow="1"
          mt="6rem"
          mr="2"
          ml="2"
        >
          <UserProfileCard />
          <Box w="100%">
            <Heading as="h3" size="md">
              Your Posts
            </Heading>

            {userPosts.length !== 0 ? (
              <Flex flexDirection="column" gap="5" mt="2rem" mb="2rem">
                {userPosts.map((post) => (
                  <PostCard key={post._id} post={post} />
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
          </Box>
        </Flex>
        <SuggestedUsersSidebar />
      </Flex>
      <Box
      position="sticky"
      bottom ="0"
      left="0"
      right="0"
      h="50px"
      bgColor="brand.200"
      display={{base:"block", md:"none"}}
      zIndex="2"
      >
        <MobileNav onOpen={onOpen} />

      </Box>
    </>
  );
};

export { UserProfile };
