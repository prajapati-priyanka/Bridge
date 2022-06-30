import { Box, Flex, useDisclosure, Heading,Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  Header,
  PostCard,
  SideNav,
  SuggestedUsersSidebar,
  UserProfileCard,
} from "../components";
import { getAllPosts } from "../redux/asyncThunks/postsThunk";

const UserProfile = () => {
  const {onOpen} = useDisclosure();
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth)
  const {posts} = useSelector(state => state.posts);

  useEffect(()=>{
    dispatch(getAllPosts())
   },[dispatch]);

   const userPosts = posts.filter(post => post.username === user.username)
 
  return (
    <>
      <Header onOpen={onOpen} />
      <Flex bg="var(--bg-color)" w="100%" gap="10" minHeight="100vh" pl="6" pr="6">
        <SideNav />
        <Flex flexDirection="column" gap="5" w="60%" mt="6rem">
         <UserProfileCard />
         <Box w="100%">
            <Heading as="h3" size="md">
              Your Posts
            </Heading>

      <Flex flexDirection="column" gap="5"  mt="2rem">

        
      {userPosts.length !== 0 ? (userPosts.map(post=> (
              <Box maxW="45rem" bg="white" p="4" borderRadius="20" mb="3" key={post._id}>
              <PostCard post = {post} />
              </Box>
            ))) : (<Box>
                <Text as="h3" size="md" textAlign="center" color="gray.500">
                    You have no Posts. Start Posting..
                </Text>
              </Box>)
              }

            </Flex>
            </Box>
        </Flex>
        <SuggestedUsersSidebar />
      </Flex>
    </>
  );
};

export { UserProfile };
