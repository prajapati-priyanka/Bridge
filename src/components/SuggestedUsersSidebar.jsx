import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
} from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";

const SuggestedUsersSidebar = () => {
  return (
    <Box
      position="sticky"
      top="6rem"
      h="fit-content"
     w="30%"
      p="4"
      borderRadius="8"
      bgColor="brand.100"
    >
      <Heading as="h3" size="md">
        Suggested Users
      </Heading>
      <List>
        <ListItem>
          <Flex gap="2" mt="6" alignItems="center">
            <Avatar
              name="Priyanka Prajapati"
              src="./assets/landingImage.svg"
              cursor="pointer"
            />
            <Box cursor="pointer">
              <Heading as="h4" size="sm">
                Priyanka Prajapati
              </Heading>
              <Text>@pihu909</Text>
            </Box>
            <Button leftIcon={<AiOutlinePlus />} p="2" ml="auto" fontSize="14">
              Follow
            </Button>
          </Flex>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <Flex gap="2" mt="6" alignItems="center">
            <Avatar
              name="Priyanka Prajapati"
              src="./assets/landingImage.svg"
              cursor="pointer"
            />
            <Box cursor="pointer">
              <Heading as="h4" size="sm">
                Priyanka Prajapati
              </Heading>
              <Text>@pihu909</Text>
            </Box>
            <Button leftIcon={<AiOutlinePlus />} p="2" ml="auto" fontSize="14">
              Follow
            </Button>
          </Flex>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <Flex gap="2" mt="6" alignItems="center">
            <Avatar
              name="Priyanka Prajapati"
              src="./assets/landingImage.svg"
              cursor="pointer"
            />
            <Box cursor="pointer">
              <Heading as="h4" size="sm">
                Priyanka Prajapati
              </Heading>
              <Text>@pihu909</Text>
            </Box>
            <Button leftIcon={<AiOutlinePlus />} p="2" ml="auto" fontSize="14">
              Follow
            </Button>
          </Flex>
        </ListItem>
      </List>
    </Box>
  );
};

export { SuggestedUsersSidebar };
