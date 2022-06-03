import { Box, ListItem, List,ListIcon} from "@chakra-ui/react";
import { AiOutlineHome,AiOutlineUser } from "react-icons/ai";
import { MdOutlineExplore,MdOutlineBookmarkBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";



const SideNav = () =>{

    const navigate = useNavigate();
    return(
   <Box position="sticky" top="6rem" h="fit-content" w="18%" >
       <List spacing={4} w="100%">
           <ListItem  cursor="pointer" p="2" pl="10" fontSize="lg" borderRadius="20" _hover={{
               bgColor:"#e6ddd2"
           }} onClick={()=>navigate("/home")}>
               <ListIcon as ={AiOutlineHome} mb='0.5' mr="1rem" />
               Feed
               </ListItem>
           <ListItem  cursor="pointer" p="2" pl="10" fontSize="lg" borderRadius="20" _hover={{
               bgColor:"#e6ddd2"
           }} onClick={()=>navigate("/home")}>
               <ListIcon as ={MdOutlineExplore} mb='0.5' mr="1rem" />
               Explore
               </ListItem>
           <ListItem  cursor="pointer" p="2" pl="10" fontSize="lg" borderRadius="20" _hover={{
               bgColor:"#e6ddd2"
           }} onClick={()=>navigate("/bookmark")}>
               <ListIcon as={MdOutlineBookmarkBorder} mb='0.5' mr="1rem" />
               Bookmark
               </ListItem>

           <ListItem  cursor="pointer" p="2" pl="10" fontSize="lg" borderRadius="20" _hover={{
               bgColor:"#e6ddd2"
           }} onClick={()=>navigate("/profile")}>
               <ListIcon as={AiOutlineUser} mb='0.5' mr="1rem" />
               Profile
               </ListItem>
       </List>
   </Box>
    )
}

export {SideNav}
