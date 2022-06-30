import { Box, Flex, useDisclosure} from "@chakra-ui/react";
import {
    Header,
    PostCard,
    SideNav,
    SuggestedUsersSidebar,
    MobileNav
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
            <Box
      position="sticky"
      bottom ="0"
      left="0"
      right="0"
      h="50px"
      bgColor="brand.200"
      display={{base:"block", md:"none"}}
      zIndex="2"
      >
        <MobileNav onOpen={onOpen} />

      </Box>
          </>
    )
}

export {Bookmark}