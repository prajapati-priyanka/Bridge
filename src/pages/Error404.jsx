import { useNavigate } from "react-router-dom";
import { Flex, Image, Button } from "@chakra-ui/react";
import { error404 } from "../assets";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <Flex justifyContent="center" h="100vh" w="100vw">
      <Image
        src={error404}
        alt="errorPage"
        w={{ base: "80%", sm: "60%", md: "38%", lg: "28%" }}
      ></Image>
      <Button
        position="absolute"
        bottom="10%"
        onClick={() => navigate("/home")}
      >
        Return To Home
      </Button>
    </Flex>
  );
};

export { Error404 };
