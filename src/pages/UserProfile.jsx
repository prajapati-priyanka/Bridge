import {
  Box,
  Flex,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Header,
  PostCard,
  SideNav,
  SuggestedUsersSidebar,
  UserProfileCard,
  CreatePostModal,
  MobileNav,
  EditUserProfileModal,
} from "../components";
import { getSingleUser, getUserPosts } from "../services";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenProfile,
    onOpen: onOpenProfile,
    onClose: onCloseProfile,
  } = useDisclosure();

  const { username } = useParams();
  const { posts } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.users);
  const [userProfile, setUserProfile] = useState(null);
  const [userPosts, setUserPosts] = useState(null);

  useEffect(() => {
    getSingleUser(setUserProfile, username);
    getUserPosts(setUserPosts, username);
  }, [username, posts, users]);

  return (
    <>
      <CreatePostModal isOpen={isOpen} onClose={onClose} />
      <EditUserProfileModal
        isOpenProfile={isOpenProfile}
        onCloseProfile={onCloseProfile}
      />
      <Header onOpen={onOpen} />
      <Box>
        <Flex
          bg="var(--bg-color)"
          w="100%"
          gap="10"
          minHeight="100vh"
          pl={{ base: "3", lg: "6" }}
          pr={{ base: "3", lg: "6" }}
        >
          <SideNav onOpen={onOpen} />
          <Flex
            flexDirection="column"
            gap="5"
            flexGrow="1"
            mt="6rem"
            mr="2"
            ml="2"
          >
            <UserProfileCard
              onOpenProfile={onOpenProfile}
              userProfile={userProfile}
              userPostsLength={userPosts?.length}
            />
            <Box w="100%">
              <Heading as="h3" size="md">
                Your Posts
              </Heading>

              {userPosts?.length !== 0 ? (
                <Flex
                  flexDirection="column"
                  gap="5"
                  maxW="50rem"
                  mt="2rem"
                  mb="2rem"
                >
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
      </Box>
    </>
  );
};

export { UserProfile };
