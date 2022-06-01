import {
  Flex,
  Heading,
 useDisclosure,
  Input,
  Button,
  Box,
} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";
import { SideNav, PostCard, SuggestedUsersSidebar, CreatePostModal } from "../components";

const Home = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    {isOpen ? (
      <CreatePostModal isOpen= {isOpen} onClose={onClose} />
    ): null}
      <Flex
        bg="white"
        w="100%"
        // my="4"
        gap="10"
        justifyContent="space-between"
        position="fixed"
        top="0"
        p="3"
        pl="6" pr="6"
        zIndex="3"
      >
        <Heading as="h2" size="xl" fontFamily="Tiro Kannada">
          Bridge
        </Heading>

        <Input
          type="search"
          placeholder="Search for content or user"
          bg="var(--bg-color)"
          w="40%"
          variant="unstyled"
          borderRadius="20"
          p="2"
          paddingLeft="4"
        />
        <Button leftIcon={<EmailIcon />} variant="solid" onClick={onOpen}>
          Create Post
        </Button>
      </Flex>
      <Flex bg="var(--bg-color)" w="100%"   gap="10" h="100%" pl="6" pr="6">
        <SideNav />
        <Flex flexDirection="column" gap="5" w="60%" mt="6rem">
          <Box maxW="40rem" bg="white" p="4" borderRadius="20" >
            <PostCard />
          </Box>
          <Box maxW="40rem" bg="white" p="4" borderRadius="20">
            <PostCard />
          </Box>
          <Box maxW="40rem" bg="white" p="4" borderRadius="20">
            <PostCard />
          </Box>
          <Box maxW="40rem" bg="white" p="4" borderRadius="20">
            <PostCard />
          </Box>
          <Box maxW="40rem" bg="white" p="4" borderRadius="20">
            <PostCard />
          </Box>
          <Box maxW="40rem" bg="white" p="4" borderRadius="20">
            <PostCard />
          </Box>
          <Box maxW="40rem" bg="white" p="4" borderRadius="20">
            <PostCard />
          </Box>
        </Flex>

        <SuggestedUsersSidebar />
      </Flex>
    </>
  );
};

export { Home };
