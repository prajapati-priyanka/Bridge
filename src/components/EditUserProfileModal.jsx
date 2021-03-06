import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Text,
  Avatar,
  Box,
  Input,
  Textarea,
  FormLabel,
  useToast,
} from "@chakra-ui/react";
import { AiFillCamera } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { editUserProfile } from "../redux/asyncThunks";
import { saveImageToCloudinary } from "../services";
import { updateUser, setLoading } from "../redux/slices";

const EditUserProfileModal = ({
  isOpenProfile,
  onCloseProfile,
  userProfile,
  setUserProfile,
}) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const {token, isLoading } = useSelector((state) => state.auth);
  const initialUserData = { ...userProfile, avatarUrl:"", avatarFile: {} }
  const [userData, setUserData] = useState(initialUserData);

  let reader = new FileReader();


  const addProfileImageHandler = (e) => {
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      if (reader.readyState === 2) {
        setUserData({
          ...userData,
          avatarUrl: reader.result,
          avatarFile: e.target.files[0],
        });
      }
    };
  };

  const saveEditedUser = async (data) => {
    try {
      const response = await dispatch(editUserProfile({ userData: data, token }));
      if (response?.payload.status === 201) {
        setUserProfile(response.payload.data.user);
        dispatch(updateUser(response.payload.data.user));
        toast({
          description: "Profile updated successfully",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      } else {
        toast({
          description: `${response.payload.data.errors[0]}`,
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const editUserProfileHandler = async () => {
    try {
      if (userData.avatarUrl !== "") {
        dispatch(setLoading());
        await saveImageToCloudinary(
          userData.avatarFile,
          saveEditedUser,
          userData,
          "image"
        );
      } else if (
        userData.bio !== userProfile.bio ||
        userData.website !== userProfile.website
        
      ) {
        saveEditedUser(userData);
      }
    } catch (error) {
      console.error(error);
    } finally {
      onCloseProfile();
    }
  };

  

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };



  return (
    <Modal isOpen={isOpenProfile} onClose={onCloseProfile}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Profile</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex gap="10" mb="2">
            <Text>Avatar</Text>
              <Box position="relative">
                <Avatar
                  name={userData?.firstName + " " + userData?.lastName}
                  src={userData?.avatarUrl || userProfile?.avatarUrl}
                  size="md"
                ></Avatar>
                <Box position="absolute" top="54%" left="59%">
                  <FormLabel
                    cursor="pointer"
                    background="white"
                    borderRadius="50%"
                    p="5px"
                  >
                    <Input
                      accept="image/*"
                      type="file"
                      position="absolute"
                      opacity="0"
                      bgColor="red.100"
                      p="0"
                      visibility="hidden"
                      onChange={addProfileImageHandler}
                    />
                    <AiFillCamera fontSize="18px" />
                  </FormLabel>
                </Box>
              </Box>
          
          </Flex>
          <Flex gap="10" mb="2">
            <Text>Name</Text>
            <Text>
              {userData?.firstName} {userData?.lastName}
            </Text>
          </Flex>
          <Flex gap="3" mb="2">
            <Text>Username</Text>
            <Text>@{userData?.username}</Text>
          </Flex>
          <Flex gap="6" mb="2">
            <Text>Website</Text>
            <Input
              placeholder="https://priyanka-prajapati.netlify.app/"
              borderColor="gray.300"
              size="sm"
              borderRadius="8"
              _hover={{
                borderColor: "brand.400",
              }}
              name="website"
              value={userData?.website}
              onChange={inputChangeHandler}
            ></Input>
          </Flex>
          <Flex gap="14" mb="2">
            <Text>Bio</Text>
            <Textarea
              resize="none"
              _hover={{
                borderColor: "brand.400",
              }}
              name="bio"
              value={userData?.bio}
              onChange={inputChangeHandler}
            ></Textarea>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button isLoading={isLoading} onClick={editUserProfileHandler}>Update</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export { EditUserProfileModal };
