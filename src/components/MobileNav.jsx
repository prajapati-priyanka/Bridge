import { ListIcon, UnorderedList,ListItem } from "@chakra-ui/react";
import { AiOutlineHome,AiOutlineUser,AiOutlinePlusSquare} from "react-icons/ai";
import {MdOutlineExplore,MdOutlineBookmarkBorder} from "react-icons/md";
import { useSelector } from "react-redux";
import {useLocation, useNavigate} from "react-router-dom"

const MobileNav = ({onOpen})=>{
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const {user} = useSelector(state=> state.auth);
    return(
        <UnorderedList
        listStyleType = "none"
        display="flex"
        justifyContent = "space-around"
        alignItems = "center"
        >
            <ListItem
               cursor= "pointer"
               fontSize="25px"
               color={`${pathname === "/home" ? "brand.500" : "black"}`}
               onClick={() => navigate("/home")}
            >
            <ListIcon as={AiOutlineHome} />

            </ListItem>
            <ListItem
               cursor= "pointer"
               fontSize="25px"
               color={`${pathname === "/explore" ? "brand.500" : "black"}`}
               onClick={() => navigate("/explore")}
            >
            <ListIcon as={MdOutlineExplore} />

            </ListItem>
            <ListItem
               cursor= "pointer"
               fontSize="25px"
              onClick={onOpen}
               
            >
            <ListIcon as={AiOutlinePlusSquare} />

            </ListItem>
            <ListItem
               cursor= "pointer"
               fontSize="25px"
               color={`${pathname === "/bookmark" ? "brand.500" : "black"}`}
               onClick={() => navigate("/bookmark")}
            >
            <ListIcon as={MdOutlineBookmarkBorder} />

            </ListItem>
            <ListItem
               cursor= "pointer"
               fontSize="25px"
               color={`${pathname.includes("/profile") ? "brand.500" : "black"}`}
               onClick={() => navigate(`/profile/${user.username}`)}
               
            >
            <ListIcon as={AiOutlineUser} />

            </ListItem>
         
        </UnorderedList>
    )
}

export { MobileNav}