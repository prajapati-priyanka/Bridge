import { Flex, useDisclosure, Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SideNav,
  PostCard,
  SuggestedUsersSidebar,
  CreatePostModal,
  Header,
} from "../components";
import { getAllPosts } from "../redux/asyncThunks/postsThunk";


const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const {posts} = useSelector(state=> state.posts)
    

  useEffect(()=>{
      dispatch(getAllPosts())
     },[dispatch]) 

  return (
    <>
      {isOpen ? <CreatePostModal isOpen={isOpen} onClose={onClose} /> : null}
      <Header onOpen={onOpen} />
      <Flex bg="var(--bg-color)" w="100%" gap="10" h="100%" pl="6" pr="6">
        <SideNav />
        <Flex flexDirection="column" gap="5" w="60%" mt="6rem">
       

            {posts.map(post=> (
              <Box maxW="45rem" bg="white" p="4" borderRadius="20" key={post._id}>
              <PostCard post = {post} />
              </Box>
            ))}
           
        </Flex>

        <SuggestedUsersSidebar />
      </Flex>
    </>
  );
};

export { Home };
