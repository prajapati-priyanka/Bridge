import { Flex, useDisclosure, Box, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SideNav,
  PostCard,
  SuggestedUsersSidebar,
  CreatePostModal,
  Header,
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
      <Flex bg="var(--bg-color)" w="100%" gap="10" minH="100vh" pl="6" pr="6">
        <SideNav />
        {posts.length !== 0 ? (
          <Flex flexDirection="column" gap="5" flexGrow="1" mt="6rem">
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
    </>
  );
};

export { Explore };
