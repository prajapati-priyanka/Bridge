import {
  Box,
  Flex,
  Heading,
  Button,
  Link,
  Text,
  Image,
} from "@chakra-ui/react";

const Landing = () => {
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
        <Button
          // bgColor="yellow.400"
          variant="solid"
          colorScheme="yellow"
          width="30%"
          // _hover={{ bg: "var(--primary-hover-color)" }}
        >
          SignUp
        </Button>
        <Button variant="link" colorScheme="yellow" width="48%">Already have an account?</Button>
      </Box>
      <Box w={{ md: "30%", sm: "70%" }}>
        <Image src="./assets/landingImage.svg" alt="landing" w="100%" />
      </Box>
    </Flex>
  );
};

export { Landing };
