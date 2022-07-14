import { Box, ListItem, List, ListIcon } from "@chakra-ui/react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { MdOutlineExplore, MdOutlineBookmarkBorder } from "react-icons/md";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const SideNav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { user } = useSelector((state) => state.auth);

  return (
    <Box
      position="sticky"
      top="6rem"
      h="fit-content"
      flexBasis="15%"
      minW="fit-content"
      display={{ base: "none", md: "block" }}
    >
      <List spacing={4} w="100%">
        <ListItem
          cursor="pointer"
          p="2"
          pl="10"
          fontSize="lg"
          borderRadius="20"
          _hover={{
            bgColor: "#e6ddd2",
          }}
          onClick={() => navigate("/home")}
          color={`${pathname === "/home" ? "brand.500" : "black"}`}
        >
          <ListIcon as={AiOutlineHome} mb="0.5" mr="1rem" />
          Feed
        </ListItem>
        <ListItem
          cursor="pointer"
          p="2"
          pl="10"
          fontSize="lg"
          borderRadius="20"
          _hover={{
            bgColor: "#e6ddd2",
          }}
          onClick={() => navigate("/explore")}
          color={`${pathname === "/explore" ? "brand.500" : "black"}`}
        >
          <ListIcon as={MdOutlineExplore} mb="0.5" mr="1rem" />
          Explore
        </ListItem>
        <ListItem
          cursor="pointer"
          p="2"
          pl="10"
          fontSize="lg"
          borderRadius="20"
          _hover={{
            bgColor: "#e6ddd2",
          }}
          onClick={() => navigate("/bookmark")}
          color={`${pathname === "/bookmark" ? "brand.500" : "black"}`}
        >
          <ListIcon as={MdOutlineBookmarkBorder} mb="0.5" mr="1rem" />
          Bookmark
        </ListItem>

        <ListItem
          cursor="pointer"
          p="2"
          pl="10"
          fontSize="lg"
          borderRadius="20"
          _hover={{
            bgColor: "#e6ddd2",
          }}
          onClick={() => navigate(`/profile/${user.username}`)}
          color={`${
            pathname.includes("/profile") && pathname.includes(`${user.username}`)
              ? "brand.500"
              : "black"
          }`}
        >
          <ListIcon as={AiOutlineUser} mb="0.5" mr="1rem" />
          Profile
        </ListItem>
      </List>
    </Box>
  );
};

export { SideNav };
