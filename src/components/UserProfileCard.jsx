import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Text,
  Link,
  useToast,
} from "@chakra-ui/react";
import { AiOutlineLogout } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { followUser,unfollowUser } from "../redux/asyncThunks";
import { logoutUser, updateUser } from "../redux/slices";

const UserProfileCard = ({ onOpenProfile, userProfile, userPostsLength }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);
  const toast = useToast();

  const logoutHandler = () => {
    dispatch(logoutUser());
    toast({
      description: "You are succesfully logged out",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    navigate("/");
  };

  const followUserHandler = async (followUserId) => {
    const response = await dispatch(followUser({ followUserId, token }));
    dispatch(updateUser(response?.payload.data.user));
  };

  const unfollowUserHandler = async (followUserId) =>{
    const response = await dispatch(unfollowUser({followUserId, token}));
    dispatch(updateUser(response?.payload.data.user))
  }


  return (
    <Flex flexDirection="column" maxW={{base:"100%", lg:"50rem"}} alignItems="center" textAlign="center" mb="8">
      <Avatar
        name={userProfile?.firstName + " " + userProfile?.lastName}
        src={userProfile?.avatarUrl}
        size="2xl"
      />
  
      <Heading as="h5" size="md" mt="1">
        {userProfile?.firstName}  {userProfile?.lastName}
      </Heading>
      <Text>@{userProfile?.username}</Text>
      {userProfile?.username === user.username ? (
        <Flex gap="4" my="2">
          <Button onClick={onOpenProfile}>Edit Profile</Button>
          <IconButton
            variant="solid"
            bgColor="red.500"
            color="white"
            fontSize="xl"
            icon={<AiOutlineLogout />}
            onClick={logoutHandler}
            _hover={{
              bgColor: "red.400",
            }}
            _focus={{
              bgColor: "red.400",
            }}
            _active={{
              bgColor: "red.400",
            }}
          ></IconButton>
        </Flex>
      ) : user.following.some(
          (item) => item.username === userProfile?.username
        ) ? (
        <Button variant="outline" my="2" onClick={() => unfollowUserHandler(userProfile._id)}>
          Unfollow
        </Button>
      ) : (
        <Button my="2" onClick={() => followUserHandler(userProfile._id)}>Follow</Button>
      )}

      <Text>{userProfile?.bio}</Text>
      <Link
        href={userProfile?.website}
        isExternal
        fontWeight="400"
        color="blue.500"
      >
        {userProfile?.website}
      </Link>
      
      <Flex
        gap="4"
        bg="brand.100"
        w="fit-content"
        p="4"
        borderRadius="8"
        mt="4"
      >
        <Box cursor="pointer">
          <Heading as="h5" size="md" textAlign="center">
            {userProfile?.following?.length}
          </Heading>
          <Text>Following</Text>
        </Box>
        <Box cursor="pointer">
          <Heading as="h5" size="md" textAlign="center">
            {userPostsLength}
          </Heading>
          <Text>Posts</Text>
        </Box>
        <Box cursor="pointer">
          <Heading as="h5" size="md" textAlign="center">
            {userProfile?.followers?.length}
          </Heading>
          <Text>Followers</Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export { UserProfileCard };
