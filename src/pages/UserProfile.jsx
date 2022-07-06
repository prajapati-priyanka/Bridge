import { Box, Flex, useDisclosure, Heading} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import {
  Header,
  PostCard,
  SideNav,
  SuggestedUsersSidebar,
  UserProfileCard,CreatePostModal, MobileNav, EditUserProfileModal 
} from "../components";
import { getSingleUser, getUserPosts } from "../services";

const UserProfile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenProfile,
    onOpen: onOpenProfile,
    onClose: onCloseProfile,
  } = useDisclosure();

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { posts } = useSelector((state) => state.posts);
  const {username} = useParams();
  const [userProfile, setUserProfile] = useState(null);
  const [userPosts, setUserPosts] = useState(null);
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    getSingleUser(setUserProfile, username,setLoader);
    getUserPosts(setUserPosts, username, setLoader);
  }, [username]);

 

  return (
    <>
    <CreatePostModal isOpen={isOpen} onClose={onClose}/>
    <EditUserProfileModal
        isOpenProfile={isOpenProfile}
        onCloseProfile={onCloseProfile}
      />
      <Header onOpen={onOpen} />
      <Box>
        {loader ? (<CircularProgress />):(
          <>
           <Flex
        bg="var(--bg-color)"
        w="100%"
        gap="10"
        minHeight="100vh"
        pl="6"
        pr="6"
      >
        <SideNav onOpen = {onOpen}/>
        <Flex
          flexDirection="column"
          gap="5"
          flexGrow="1"
          mt="6rem"
          mr="2"
          ml="2"
        >
          <UserProfileCard onOpenProfile={onOpenProfile} userProfile={userProfile} userPostsLength={userPosts?.length}/>
          <Box w="100%">
            <Heading as="h3" size="md">
              Your Posts
            </Heading>

            {userPosts?.length !== 0 ? (
              <Flex flexDirection="column" gap="5" mt="2rem" mb="2rem">
                {userPosts?.map((post) => (
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
        )} 
      </Box>
    </>
  );
};

export { UserProfile };
