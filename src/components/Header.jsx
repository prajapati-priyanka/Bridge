import {Flex, Heading, Input, Button} from "@chakra-ui/react";
import { EmailIcon } from "@chakra-ui/icons";

const Header = ({onOpen})=>{
    return(
        <Flex
        bg="white"
        w="100%"
        // my="4"
        gap="10"
        justifyContent="space-between"
        position="fixed"
        top="0"
        p="3"
        pl="6" pr="6"
        zIndex="3"
      >
        <Heading as="h2" size="xl" fontFamily="Tiro Kannada">
          Bridge
        </Heading>

        <Input
          type="search"
          placeholder="Search for content or user"
          bg="var(--bg-color)"
          w="40%"
          variant="unstyled"
          borderRadius="20"
          p="2"
          paddingLeft="4"
        />
        <Button leftIcon={<EmailIcon />} variant="solid" onClick={onOpen}>
          Create Post
        </Button>
      </Flex>
    )
}

export {Header}