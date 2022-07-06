import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../redux/asyncThunks";

const SuggestedUsersSidebar = () => {

const {users} = useSelector(state=>state.users);
const {user} = useSelector(state=>state.auth);
const dispatch = useDispatch();
const navigate = useNavigate();

useEffect(()=>{
  dispatch(getAllUsers());
},[dispatch]);


const otherUsers = users.filter(item=> item.username !== user.username)

const nonFollowers = otherUsers.filter(item=> item.followers.every(follower=>follower.username !== user.username));

  return (
    <Box
      position="sticky"
      top="6rem"
      h="fit-content"
      flexBasis="25%"
      minW="fit-content"
      display={{base: "none", lg: "block"}}
      p="4"
      borderRadius="8"
      bgColor="brand.100"
    >
      <Heading as="h3" size="md">
        Suggested Users
      </Heading>
      <List>
        {nonFollowers.map(user=>(
            <ListItem key={user._id}>
            <Flex gap="2" mt="6" alignItems="center">
              <Avatar
                name={user.firstName + " " + user.lastName}
                src={user.avatarUrl}
                cursor="pointer"
                onClick={()=>navigate(`/profile/${user.username}`)}
              />
              <Box cursor="pointer"  onClick={()=>navigate(`/profile/${user.username}`)}>
                <Heading as="h4" size="sm">
                 {user.firstName} {user.lastName}
                </Heading>
                <Text fontSize="13px">@{user.username}</Text>
              </Box>
              <Button leftIcon={<AiOutlinePlus />} p="2" ml="auto" fontSize="14">
                Follow
              </Button>
            </Flex>
          </ListItem>
        ))}
       
      </List>
     
     
    </Box>
  );
};

export { SuggestedUsersSidebar };
