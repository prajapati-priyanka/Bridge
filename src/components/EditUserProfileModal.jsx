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
} from "@chakra-ui/react";
import { AiFillCamera } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useState } from "react";

const EditUserProfileModal = ({ isOpenProfile, onCloseProfile }) => {
  const { user } = useSelector((state) => state.auth);
  const [avatarImg, setAvatarImg] = useState();
  const [userData, setUserData] = useState({
    bio: "",
    website: "",
  });

  const uploadImage = async (image) => {
    const data = new FormData();
    data.append("file", image[0]);
    data.append("upload_preset", "p4xrmmuy");

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
        setAvatarImg(data.url);
      })
      .catch((error) => {
        console.error(error);
      });
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
                name={user.firstName + " " + user.lastName}
                src=""
                size="md"
              ></Avatar>
              <Box position="absolute" top="54%" left="59%">
                <FormLabel cursor="pointer">
                  <Input
                    accept="image/*"
                    type="file"
                    position="absolute"
                    opacity="0"
                    bgColor="red.100"
                    p="0"
                    visibility="hidden"
                    onChange={(e) => uploadImage(e.target.files)}
                  />
                  <AiFillCamera fontSize="20px" color="white" />
                </FormLabel>
              </Box>
            </Box>
          </Flex>
          <Flex gap="10" mb="2">
            <Text>Name:</Text>
            <Text>
              {user.firstName} {user.lastName}
            </Text>
          </Flex>
          <Flex gap="3" mb="2">
            <Text>Username:</Text>
            <Text>@{user.username}</Text>
          </Flex>
          <Flex gap="6" mb="2">
            <Text>Website:</Text>
            <Input
              placeholder="https://priyanka-prajapati.netlify.app/"
              borderColor="gray.300"
              size="sm"
              borderRadius="8"
              name="website"
              value={userData.website}
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
              value={userData.bio}
              onChange={inputChangeHandler}
            ></Textarea>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button>Update</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export { EditUserProfileModal };
