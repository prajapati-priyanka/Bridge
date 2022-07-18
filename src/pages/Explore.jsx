import { Flex, useDisclosure, Box, Heading, CircularProgress } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SideNav,
  PostCard,
  SuggestedUsersSidebar,
  CreatePostModal,
  Header,
  MobileNav,
  Filters,
} from "../components";
import { getAllPosts } from "../redux/asyncThunks";
import { filterPosts } from "../utlis";

const Explore = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { posts, status } = useSelector((state) => state.posts);
  const [editedPost, setEditedPost] = useState(null);
  const [filterType, setFilterType] = useState("noFilter");

  useEffect(() => {
    
    if (status === "idle") {
      dispatch(getAllPosts());
    }
  }, [dispatch, status]);



  const filteredPosts = filterPosts(posts, filterType);

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
      <Box h="100vh">
      {status === "pending" ? (
          <CircularProgress
          isIndeterminate
          color="brand.500"
          position="fixed"
          top="50%"
          left="50%"
          size="80px"
          thickness="10px"
        />
      ) : null }
      <Header onOpen={onOpen} />
      {status === "resolved" ? (
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
        {posts.length !== 0 ? (
          <Flex flexDirection="column" gap="5" maxW="50rem" mt="6rem" mb="2rem">
            <Filters filterType={filterType}
                    setFilterType={setFilterType} />
            {[...filteredPosts].map((post) => (
              <PostCard
                key={post._id}
                post={post}
                setEditedPost={setEditedPost}
                onOpen= {onOpen}
              />
            ))}
          </Flex>
        ) : (
          <Flex maxW="50rem" justifyContent="center" alignItems="center">
            <Heading as="h3" size="md" textAlign="center">
              No posts to display
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
        bgColor="brand.200"
        display={{ base: "block", md: "none" }}
        zIndex="2"
      >
        <MobileNav onOpen={onOpen} />
      </Box>
</>
      ) : null} 
      </Box>
     
    </>
  );
};

export { Explore };
