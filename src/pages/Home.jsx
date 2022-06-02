import { Flex, useDisclosure, Box } from "@chakra-ui/react";

import {
  SideNav,
  PostCard,
  SuggestedUsersSidebar,
  CreatePostModal,
  Header,
} from "../components";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {isOpen ? <CreatePostModal isOpen={isOpen} onClose={onClose} /> : null}
      <Header onOpen={onOpen} />
      <Flex bg="var(--bg-color)" w="100%" gap="10" h="100%" pl="6" pr="6">
        <SideNav />
        <Flex flexDirection="column" gap="5" w="60%" mt="6rem">
          <Box maxW="45rem" bg="white" p="4" borderRadius="20">
            <PostCard />
          </Box>
          <Box maxW="45rem" bg="white" p="4" borderRadius="20">
            <PostCard />
          </Box>
          <Box maxW="45rem" bg="white" p="4" borderRadius="20">
            <PostCard />
          </Box>
          <Box maxW="45rem" bg="white" p="4" borderRadius="20">
            <PostCard />
          </Box>
          <Box maxW="45rem" bg="white" p="4" borderRadius="20">
            <PostCard />
          </Box>
          <Box maxW="45rem" bg="white" p="4" borderRadius="20">
            <PostCard />
          </Box>
          <Box maxW="45rem" bg="white" p="4" borderRadius="20">
            <PostCard />
          </Box>
        </Flex>

        <SuggestedUsersSidebar />
      </Flex>
    </>
  );
};

export { Home };
