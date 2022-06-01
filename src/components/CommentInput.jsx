import { Avatar, Button, Flex, Input, InputGroup, InputRightElement } from "@chakra-ui/react"


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
                 <Button
                    variant ="ghost"
                    _hover ={{
                        bgColor: "transparent"
                    }}
                    cursor="pointer"
                >
                    POST


                 </Button>
             
             </InputRightElement>
             </InputGroup>
         </Flex>
    )
}

export {CommentInput}