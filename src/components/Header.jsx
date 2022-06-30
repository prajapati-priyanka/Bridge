import {Flex, Heading, Input, Button} from "@chakra-ui/react";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Header = ({onOpen})=>{
  const navigate = useNavigate()
    return(
        <Flex
        bg="white"
        w="100%"
        gap="10"
        justifyContent="space-between"
        position="fixed"
        top="0"
        p="3"
        pl="6" pr="6"
        zIndex="3"
      >
        <Heading as="h2" size="xl" fontFamily="Tiro Kannada" cursor="pointer" onClick={()=>navigate("/")}>
          Bridge
        </Heading>

        <Input
          type="search"
          placeholder="Search for content or user"
          bg="var(--bg-color)"
          w={{base:"100%", lg:"40%"}}
          variant="unstyled"
          borderRadius="20"
          p="2"
          paddingLeft="4"
        />
        <Button leftIcon={<AiOutlinePlusSquare />} variant="solid" onClick={onOpen} display={{base:"none", md: "block"}}>
          Create Post
        </Button>
      </Flex>
    )
}

export {Header}