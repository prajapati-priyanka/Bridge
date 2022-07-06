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

const EditUserProfileModal = ({ isOpenProfile, onCloseProfile }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { user, token } = useSelector((state) => state.auth);
  const [userData, setUserData] = useState({
    avatarUrl: user?.avatarUrl ? user.avatarUrl : "",
    bio: user?.bio ? user.bio : "",
    website: user?.website ? user.website : "",
  });

  const [loading, setLoading] = useState(false);

  const saveAvatarToCloudinary = async (image) => {
    try {
      const data = new FormData();
      data.append("file", image[0]);
      data.append("upload_preset", "p4xrmmuy");
      setLoading(true);
      const requestOptions = {
        method: "POST",
        body: data,
      };

      await fetch(
        "https://api.cloudinary.com/v1_1/prajapati-priyanka/image/upload",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          setUserData((prevData) => ({ ...prevData, avatarUrl: data.url }));
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const editUserProfileHandler = async () => {
    const response = await dispatch(editUserProfile({ userData, token }));

    if (response?.payload.status === 201) {
      toast({
        description: "Profile updated successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }else{
      toast({
        description: `${response.payload.data.errors[0]}`,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
    onCloseProfile();
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
            {loading ? (
              <Text fontWeight="500" color="blue.500">
                Updating...
              </Text>
            ) : (
              <Box position="relative">
                <Avatar
                  name={user.firstName + " " + user.lastName}
                  src={userData?.avatarUrl}
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
                      onChange={(e) => saveAvatarToCloudinary(e.target.files)}
                    />
                    <AiFillCamera fontSize="18px" />
                  </FormLabel>
                </Box>
              </Box>
            )}
          </Flex>
          <Flex gap="10" mb="2">
            <Text>Name</Text>
            <Text>
              {user.firstName} {user.lastName}
            </Text>
          </Flex>
          <Flex gap="3" mb="2">
            <Text>Username</Text>
            <Text>@{user.username}</Text>
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
          <Button onClick={editUserProfileHandler}>Update</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export { EditUserProfileModal };
