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
  useToast
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/asyncThunks/authThunk";
import {useDispatch, useSelector} from "react-redux"



const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
 const toast = useToast();

  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
  });
  const [show, setShow] = useState(false);
  const {isLoading} = useSelector(state=> state.auth)

  const handlePasswordClick = () => setShow(!show);

  const guestUser = {
    username: "pihu909",
    password: "pihu7845",
  };

  const onChangeHandler = (e)=>{
    const {name, value} = e.target;

    setNewUser((prevUser => ({...prevUser, [name]:value})))
}
  
  const guestLoginHandler = (e)=>{
      e.preventDefault()
      setNewUser(guestUser)
  }

  const checkInputs = () =>{
    return newUser.username && newUser.password;
  }

  const loginHandler = async (e)=>{
    if(checkInputs()){
      e.preventDefault();
       const response = await dispatch(loginUser(newUser));
      if(response?.payload?.status===200){
        localStorage.setItem("token", response.payload.data.encodedToken);
        localStorage.setItem("user", JSON.stringify(response.payload.data.foundUser));
      
      }
   
      navigate(location?.state?.from?.pathname || "/home",{
        replace:true,
      });
      toast({
        description: "Successfully Logged In",
        status: "success",
        duration: 2000,
        isClosable: true
      })
    }else{
      toast({
        description: "Enter both the fields",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    }
   
  }
  
  

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
        Login
      </Heading>

      <FormControl mb="3.5">
        <FormLabel>Username:</FormLabel>
        <Input
          rounded="none"
          variant="filled"
          type="email"
          placeholder="Enter username"
          name="username"
          value={newUser.username}
          onChange = {(e)=>onChangeHandler(e)}
        />
      </FormControl>
      <FormControl mb="3.5">
        <FormLabel>Password:</FormLabel>
        <InputGroup size="md">
          <Input
           rounded="none"
           variant="filled"
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
            name="password"
            value={newUser.password}
            onChange = {(e)=>onChangeHandler(e)}
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

      <Button variant="outline" display="block" w="100%" mt="8" mb="4" onClick={guestLoginHandler}>
        Enter Guest Credentials
      </Button>
      <Button variant="solid" display="block" w="100%" mb="4" onClick={loginHandler} isLoading={isLoading} loadingText="Logging In" spinnerPlacement="center">
        Login
      </Button>

      <Text textAlign="center">
        Don't have an account yet?
        <Link fontWeight="500" ml={["", 1]} onClick={() => navigate("/signup")}>
          SignUp
        </Link>
      </Text>
    </Box>
  );
};

export { Login };
