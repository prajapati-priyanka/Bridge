import { Flex, Avatar,Box,Heading,Text,Popover,PopoverTrigger, IconButton, PopoverContent,PopoverArrow,PopoverCloseButton,PopoverBody,Button } from "@chakra-ui/react";
import {BiDotsVerticalRounded} from "react-icons/bi"


const CommentCard = ()=>{
    return(
        <Flex gap="2">
            <Avatar
              name = "Priyanka Prajapati"
              src="./assets/landingImage.svg"
              size= "sm"
              cursor="pointer"

             />
             <Flex justifyContent="space-between" alignItems="center" w="100%">
                 <Box>
                     <Heading as ="h5" size="sm" cursor="pointer">Priyanka Prajapati</Heading>
                     <Text>Hello Everyone!!</Text>
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