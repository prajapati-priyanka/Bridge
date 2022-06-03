import {
  Box,
  Flex,
  Heading,
  Button,
  Text,
  Image,
  Link,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <Flex
      bgColor="var(--bg-color)"
      h="100vh"
      align="center"
      justifyContent="space-around"
      p={{ base: "8", sm: "2" }}
      wrap="wrap-reverse"
    >
      <Box display="flex" flexDirection="column" gap="2">
        <Heading as="h2" size="3xl" fontFamily="Tiro Kannada">
          Bridge
        </Heading>
        <Text fontFamily="Satisfy" fontSize="2xl">
          Fill the gap by connecting with your loved ones..!!
        </Text>
        <Flex gap="3">
          <Button
            variant="outline"
            width="30%"
            onClick={() => navigate("/signup")}
          >
            SignUp
          </Button>
          <Button variant="solid" width="30%" onClick={() => navigate("/home")}>
            Get Started
          </Button>
        </Flex>
        <Link width="48%" fontWeight="500" onClick={() => navigate("/login")}>
          Already have an account?
        </Link>
      </Box>
      <Box w={{ md: "30%", sm: "70%" }}>
        <Image src="./assets/landingImage.svg" alt="landing" w="100%" />
      </Box>
    </Flex>
  );
};

export { Landing };
