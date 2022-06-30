import { Flex, Avatar,Box,Heading,Text,Popover,PopoverTrigger, IconButton, PopoverContent,PopoverArrow,PopoverCloseButton,PopoverBody,Button } from "@chakra-ui/react";
import {BiDotsVerticalRounded} from "react-icons/bi"


const CommentCard = ({comment})=>{
    return(
        <Flex gap="2" mt="2">
            <Avatar
              name = {comment.firstName + " " + comment.lastName}
              src=""
              size= "sm"
              cursor="pointer"

             />
             <Flex justifyContent="space-between" alignItems="center" w="100%">
                 <Box>
                     <Heading as ="h5" size="sm" cursor="pointer" fontWeight="600">{comment.firstName} {comment.lastName}</Heading>
                     <Text fontSize="14px" mt="2">{comment.text}</Text>
                 </Box>
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

        </Flex>
    )
}

export {CommentCard}