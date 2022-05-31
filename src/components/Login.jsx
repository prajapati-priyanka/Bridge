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
} from "@chakra-ui/react";
import React, { useState } from "react";

const Login = () => {
  const [show, setShow] = useState(false);
  const handlePasswordClick = () => setShow(!show);

  return (
    <Box
      w={{base:"90%", md:"60%", lg:"35%"}}
      p={[1, 6]}
      mt={{base:"10", md:"10vh"}}
      mx="auto"
      border={["none", "1px"]}
      borderColor={["", "var(--border-color)"]}
      borderRadius={10}
    >
      <Heading
        as="h4"
        size="xl"
        color="var(--secondary-color)"
        mb="6"
        textAlign="center"
      >
        Login
      </Heading>

      <FormControl mb="3.5">
        <FormLabel>Username:</FormLabel>
        <Input
          rounded="none"
          variant="filled"
          type="email"
          placeholder="Enter Email"
        />
      </FormControl>
      <FormControl mb="3.5">
        <FormLabel>Password:</FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            rounded="none"
            variant="filled"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handlePasswordClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        variant="outline"
        display="block"
        w="100%"
        mt="8"
        mb="4"
        color="var(--secondary-color)"
        borderColor="var(--secondary-color)"
      >
        Enter Guest Credentials
      </Button>
      <Button
        variant="solid"
        display="block"
        w="100%"
        mb="4"
        bgColor="var(--primary-color)"
        _hover={{ bg: "var(--primary-hover-color)" }}
      >
        Login
      </Button>

      <Text textAlign="center">
        Don't have an account yet?
        <Button variant="link"  ml={["", 1]} color="var(--secondary-color)">
          SignUp
        </Button>
      </Text>
    </Box>
  );
};

export { Login };
