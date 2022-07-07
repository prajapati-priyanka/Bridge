import { Flex, useDisclosure, Box, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SideNav,
  PostCard,
  SuggestedUsersSidebar,
  CreatePostModal,
  Header,
  MobileNav
} from "../components";
import { getAllPosts } from "../redux/asyncThunks";

const Explore = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <>
      {isOpen ? <CreatePostModal isOpen={isOpen} onClose={onClose} /> : null}
      <Header onOpen={onOpen} />
      <Flex bg="var(--bg-color)" w="100%" gap="10" minH="100vh"pl={{base:"3", lg:"6"}} pr={{base:"3", lg:"6"}}>
        <SideNav />
        {posts.length !== 0 ? (
          <Flex flexDirection="column" gap="5" maxW="50rem" mt="6rem" mb="2rem">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </Flex>
        ) : (
          <Flex w="50rem" justifyContent="center" alignItems="center">
            <Heading as="h3" size="md" textAlign="center">
              No posts to display
            </Heading>
          </Flex>
        )}

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

export { Explore };
