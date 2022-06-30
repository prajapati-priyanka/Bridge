import {
  Box,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Text,
  Link,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ImSpinner3 } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "../redux/asyncThunks/authThunk";

const Signup = () => {
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.auth);
  const toast = useToast();
  const dispatch = useDispatch();
  const location = useLocation();
  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);

  const handlePasswordClick = () => setShow(!show);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const passwordValidation = () => {
    const regExp = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/;

    if (regExp.test(newUser.password)) {
      return true;
    } else {
      toast({
        description:
          "Password must be 6-12 characer long and have atleat one number,one uppercase,one lowercase letter and a special character",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  const signupHandler = async (e) => {
    e.preventDefault();

    if (passwordValidation()) {
      const response = await dispatch(signupUser(newUser));
      console.log(response);
      if (response?.payload?.status === 201) {
        localStorage.setItem(
          "user",
          JSON.stringify(response.payload.data.createdUser)
        );

        localStorage.setItem("token", response.payload.data.encodedToken);
        navigate(location?.state?.from?.pathname || "/home", {
          replace: true,
        });

        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 2000,
          isClosable: true,
        });
      } else {
        toast({
          description: "Some error occured, Please try again!",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <Box
      w={{ base: "90%", md: "60%", lg: "35%" }}
      p={[1, 6]}
      mt={{ base: "10", md: "10vh" }}
      mx="auto"
      border={["none", "1px"]}
      borderColor={["", "var(--border-color)"]}
      borderRadius={10}
    >
      <Heading
        as="h4"
        size="xl"
        color="brandSecondary.500"
        mb="6"
        textAlign="center"
      >
        Signup
      </Heading>

      <FormControl mb="3.5" isRequired>
        <FormLabel>First Name:</FormLabel>
        <Input
          rounded="none"
          variant="filled"
          type="text"
          placeholder="Enter First Name"
          minLength="3"
          required
          name="firstName"
          value={newUser.firstName}
          onChange={onChangeHandler}
        />
      </FormControl>
      <FormControl mb="3.5" isRequired>
        <FormLabel>Last Name:</FormLabel>
        <Input
          rounded="none"
          variant="filled"
          type="text"
          placeholder="Enter Last Name"
          minLength="3"
          required
          name="lastName"
          value={newUser.lastName}
          onChange={onChangeHandler}
        />
      </FormControl>
      <FormControl mb="3.5" isRequired>
        <FormLabel>Username:</FormLabel>
        <Input
          rounded="none"
          variant="filled"
          type="text"
          placeholder="Enter username"
          minLength="4"
          required
          name="username"
          value={newUser.username}
          onChange={onChangeHandler}
        />
      </FormControl>
      <FormControl mb="3.5" isRequired>
        <FormLabel>Email:</FormLabel>
        <Input
          rounded="none"
          variant="filled"
          type="email"
          placeholder="Enter email"
          minLength="4"
          required
          name="email"
          value={newUser.email}
          onChange={onChangeHandler}
        />
      </FormControl>
      <FormControl mb="3.5" isRequired>
        <FormLabel>Password:</FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            minLength="6"
            rounded="none"
            variant="filled"
            required
            name="password"
            value={newUser.password}
            onChange={onChangeHandler}
          />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              variant="ghost"
              onClick={handlePasswordClick}
            >
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        variant="solid"
        display="block"
        w="100%"
        mb="4"
        isLoading={isLoading}
        loadingText="Signing In"
        spinnerPlacement="start"
        spinner={<ImSpinner3 size={20} color="white" />}
        onClick={signupHandler}
      >
        Signup
      </Button>

      <Text textAlign="center">
        Already have an account?
        <Link ml={["", 1]} fontWeight="500" onClick={() => navigate("/login")}>
          Login
        </Link>
      </Text>
    </Box>
  );
};
export { Signup };
