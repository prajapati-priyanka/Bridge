import { Flex, useDisclosure, Box,Heading } from "@chakra-ui/react";
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


const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const {posts} = useSelector(state=> state.posts);
  const {user} = useSelector(state=> state.auth)
    

  useEffect(()=>{
      dispatch(getAllPosts())
     },[dispatch]);


     const userFeed = posts.filter(item=> item.username === user.username || user.following.some(follower=> follower.username === item.username));


  return (
    <>
      {isOpen ? <CreatePostModal isOpen={isOpen} onClose={onClose} /> : null}
      <Header onOpen={onOpen} />
      <Flex bg="var(--bg-color)" w="100%" gap="10" minH="100vh" pl="6" pr="6">
        <SideNav />
        {userFeed.length !==0 ? (
          <Flex flexDirection="column" gap="5" flexGrow="1" mt="6rem" mr="2" ml="2">
          {userFeed.map(post=> (
       
         <PostCard key={post._id} post = {post} />
       
       ))}
      
   </Flex>): (<Flex w="50rem" justifyContent="center" alignItems = "center">
    <Heading as="h3" size="md" textAlign="center">No posts to display, start posting and following other users to update your feed.</Heading>
   </Flex>)}
        

        <SuggestedUsersSidebar />
      </Flex>
    </>
  );
};

export { Home };
