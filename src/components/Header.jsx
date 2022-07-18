import {Flex, Heading, Input, Button, Avatar, Box, Text} from "@chakra-ui/react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {useState, useEffect, useRef} from "react";
import { useSelector } from "react-redux";

const Header = ({onOpen})=>{
  const navigate = useNavigate();
  const [searchedUsers, setSearchedUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const timerRef = useRef();
  const {users} = useSelector(state=> state.users);


  useEffect(()=>{
 
    timerRef.current = setTimeout(()=>{
      const foundUsers = users.filter(user=> searchQuery.length !==0 && (user.firstName.includes(searchQuery)|| user.lastName.includes(searchQuery)|| user.username.includes(searchQuery))
      
      );
      setSearchedUsers(foundUsers)
    }, 500)
  }, [searchQuery, users])

    return(
        <Flex
        bg="white"
        w="100%"
        gap="10"
        justifyContent="space-between"
        position="fixed"
        top="0"
        p="3"
        pl="6" pr="6"
        zIndex="3"
      >
        <Heading as="h2" size="xl" fontFamily="Tiro Kannada" cursor="pointer" onClick={()=>navigate("/home")}>
          Bridge
        </Heading>

        <Input
          type="search"
          position="relative"
          placeholder="Search for content or user"
          bg="var(--bg-color)"
          w={{base:"100%", lg:"40%"}}
          variant="unstyled"
          borderRadius="20"
          p="2"
          paddingLeft="4"
         value={searchQuery}
         onChange={(e)=> setSearchQuery(e.target.value)}
        />
        <Button leftIcon={<AiOutlinePlusSquare />} minW="fit-content" variant="solid" onClick={onOpen} display={{base:"none", md: "block"}}>
          Create Post
        </Button>

        {searchedUsers.length > 0 && searchQuery.length > 0 ? (
        <Flex
          flexDirection="column"
          gap="2"
          top="4rem"
          left={{base:"40%",sm:"20%", md:"15%", lg:"30%"}}
          position="absolute"
          bgColor="white"
          
          w={{base:"58%",sm:"78%",md:"65%", lg:"38%"}}
         
          zIndex="1"
          p="1"
          border="1px solid var(--chakra-colors-gray-200)"
          borderRadius="20"
        >
          {searchedUsers.map((user) => (
            <Flex
              key={user._id}
              cursor="pointer"
              alignItems="center"
              gap="2"
              px="2"
              onClick={() => navigate(`/profile/${user.username}`)}
            >
              <Avatar
                name={user.firstName + " " + user.lastName}
                src={user.avatarUrl}
                size="sm"
              />
              <Box>
                <Heading as="h4" size="sm">
                  {user.firstName + " " + user.lastName}
                </Heading>
                <Text>@{user.username}</Text>
              </Box>
            </Flex>
          ))}
        </Flex>
      ) : null}
      </Flex>
    )
}

export {Header}