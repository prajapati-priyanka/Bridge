import { Avatar, Flex, Input, InputGroup, InputRightElement,IconButton } from "@chakra-ui/react";
import {AiOutlineSend} from "react-icons/ai";


const CommentInput = ()=>{
    return(
         <Flex gap='2'>
             <Avatar
                name="Priyanka Prajapati"
                src="./assets/landingImage.svg"
                size="sm"
             />
             <InputGroup>
             <Input 
               pr= "12"
               borderRadius="4"
               placeholder="Add a comment"
               borderColor = "blackAlpha.200"
               _hover={{
                   borderColor: "brand.300"
               }}
               _active={{
                   borderColor: "brand.500"
               }}
               _focus={{
                   borderColor: "brand.500"
               }}
             />
             <InputRightElement mr="2">
             <IconButton
        
             bgColor="transparent"
            borderRadius="50%"
             fontSize = "xl"
             icon = {<AiOutlineSend />}
             _hover={{
                bgColor:"gray.200",
               
             }}
             _focus={{
                bgColor:"gray.100",
              
             }}
             _active={{
                bgColor:"gray.100",
                
             }}
          >

          </IconButton>
             
             </InputRightElement>
             </InputGroup>
         </Flex>
    )
}

export {CommentInput}