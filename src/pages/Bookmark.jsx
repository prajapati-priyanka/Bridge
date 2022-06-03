import { Box, Flex, useDisclosure} from "@chakra-ui/react";
import {
    Header,
    PostCard,
    SideNav,
    SuggestedUsersSidebar,
 
  } from "../components"

const Bookmark = ()=>{
   
        const {onOpen} = useDisclosure();
        return (
          <>
            <Header onOpen={onOpen} />
            <Flex bg="var(--bg-color)" w="100%" gap="10" h="100%" pl="6" pr="6">
              <SideNav />
              <Flex flexDirection="column" gap="5" w="60%" mt="6rem" >
    

                  
                  <Box maxW="45rem" bg="white" p="4" borderRadius="20" mb="5">
                    <PostCard />
                  </Box>
                  <Box maxW="45rem" bg="white" p="4" borderRadius="20" mb="5">
                    <PostCard />
                  </Box>
                  <Box maxW="45rem" bg="white" p="4" borderRadius="20" mb="5">
                    <PostCard />
                  </Box>
                  <Box maxW="45rem" bg="white" p="4" borderRadius="20" mb="5">
                    <PostCard />
                  </Box>
               
              </Flex>
              <SuggestedUsersSidebar />
            </Flex>
          </>
    )
}

export {Bookmark}