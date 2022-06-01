import { Avatar,Box, Button, Flex, Heading,IconButton,Popover,PopoverArrow,PopoverCloseButton,PopoverContent,PopoverTrigger,PopoverBody,Text } from "@chakra-ui/react";
import {BiDotsVerticalRounded} from "react-icons/bi"
import {MdFavoriteBorder,MdOutlineBookmarkBorder} from "react-icons/md";
import { CommentCard } from "./CommentCard";
import { CommentInput } from "./CommentInput";
 
const PostCard = ()=>{
    return(
        <Flex flexDirection="column" gap="2">
        
        {/* Avatar and name */}
         <Flex justifyContent="space-between">
            <Flex cursor="pointer" gap="2" alignItems="center">
             <Avatar name="Priyanka Prajapati" src="./assets/landingImage.svg"/>
             <Heading as="h4" size="sm">
                 Priyanka Prajapati
                 <Text fontSize="12px" color="gray.400">@pihu909</Text>
               
               
             </Heading>
           
            </Flex>
             <Popover>
                 <PopoverTrigger>
                  
                     <IconButton 
                      icon= {<BiDotsVerticalRounded />}
                      bgColor="transparent"
                      color="black"
                      size="sm"
                      fontSize= "lg"
                      _hover ={{
                          bgColor: "transparent"
                      }}

                      _active={{
                          bgColor : "transparent",
                          border : "none",
                        
                      }}

                      _focus={{
                          bgColor:"transparent",
                          border:"none"
                      }}
                     />

                     
                 </PopoverTrigger>
                 <PopoverContent  maxW="10rem">
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverBody>
                          <Button variant="ghost" display="block" w="60%">Edit</Button>
                          <Button variant="ghost" display="block" w="60%">Delete</Button>
                      </PopoverBody>
                 </PopoverContent>
             </Popover>
            
            </Flex>
          
          {/* Post Content  */}
            <Box>
              <Text>My Name is Nothing</Text>
            </Box>

            {/* Like and Bookmark */}

            <Flex justifyContent="space-between" alignItem="center">
                <Flex alignItems="center">
                   <IconButton
                   icon ={<MdFavoriteBorder />}
                   bgColor="transparent"
                   color="black"
                   size="sm"
                   fontSize= "lg"
                   borderRadius="50%"
                   _hover ={{
                       bgColor: "red.100"
                   }}

                   _active={{
                       bgColor : "red.100",
                       borderColor : "transparent",
                     
                   }}

                   _focus={{
                       bgColor:"red.100",
                       borderColor:"transparent"
                   }}

                  />

                  <Text>Liked by Priyanka and 1 others</Text>  
                
                </Flex>
                <IconButton 
                   icon = {<MdOutlineBookmarkBorder />}
                   bgColor="transparent"
                   color="black"
                   size= "sm"
                   fontSize="lg"
                   borderRadius="50%"
                   _hover={{
                       bgColor: "red.100"
                   }}
                   _focus ={{
                       bgColor: "red.100",
                       borderColor: "transparent"
                   }}

                   _active={{
                       bgColor : "red.100",
                       borderColor: "transparent"
                   }}
                />
            </Flex>
              
              <CommentInput />
              <CommentCard></CommentCard>

        </Flex>
    )
}

export{PostCard}
