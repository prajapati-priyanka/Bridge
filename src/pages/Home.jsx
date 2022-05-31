import {  Flex, Heading, InputGroup, InputLeftElement,Input,Button } from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";


const Home = ()=>{
    return(
 <Flex bg="white" justify="space-between" align="center" p="4" position="sticky" >
     <Heading as="h2" size="xl" fontFamily="Tiro Kannada">
          Bridge
        </Heading>
   
    <Input type='search' placeholder='Search for content or user' bg="var(--bg-color)" w="40%" variant="unstyled" borderRadius="20" p="2" paddingLeft="4"/>
    <Button leftIcon={<EmailIcon />} colorScheme='teal' variant='solid'>
    Create Post
  </Button>

 </Flex>
    )
}

export {Home}