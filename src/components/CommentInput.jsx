import { Avatar, Flex, Input, InputGroup, InputRightElement,IconButton, useToast } from "@chakra-ui/react";
import {AiOutlineSend} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addComment } from "../redux/asyncThunks";


const CommentInput = ({postId})=>{

    const {user, token} = useSelector(state=>state.auth);
    const dispatch = useDispatch();
    const toast = useToast();
    const [commentData, setCommentData] = useState("");
    const [commentBtnDisable, setCommentBtnDisable] = useState(false);

    const addCommentHandler = async () => {
        if (commentData === "") {
          toast({
            description: "Comment cannot be empty",
            status: "warning",
            duration: 2000,
            isClosable: true,
          });
        } else {
          const response = await dispatch(
            addComment({ postId, commentData, token, setCommentBtnDisable })
          );
          if (response?.payload.status === 201) {
            toast({
              description: "Comment has been added",
              status: "success",
              duration: 2000,
              isClosable: true,
            });
          } else {
            toast({
              description: `${response.payload.data.errors[0]}`,
              status: "error",
              duration: 2000,
              isClosable: true,
            });
          }

          setCommentData("")
        }
      };
    

    return(
         <Flex gap='2' alignItems="center">
             <Avatar
                name={user.firstName + " " + user.lastName}
                src={user.avatarUrl}
                size="sm"
             />
             <InputGroup>
             <Input 
               pr= "12"
               borderRadius="4"
               placeholder="Add a comment"
               borderColor = "blackAlpha.200"
               _hover={{
                   borderColor: "brand.300"
               }}
               _active={{
                   borderColor: "brand.500"
               }}
               _focus={{
                   borderColor: "brand.500"
               }}
               value={commentData}
               onChange={(e) => setCommentData(e.target.value)}
             />
             <InputRightElement mr="2">
             <IconButton
        
             bgColor="transparent"
            borderRadius="50%"
             fontSize = "xl"
             icon = {<AiOutlineSend />}
             _hover={{
                bgColor:"gray.200",
               
             }}
             _focus={{
                bgColor:"gray.100",
              
             }}
             _active={{
                bgColor:"gray.100",
                
             }}
             cursor={commentData !== "" ? "pointer" : "not-allowed"}
             onClick={commentData !== "" ? addCommentHandler : null}
             opacity={commentData === "" ? "0.5" : "1"}
             isLoading={commentBtnDisable}
      
          >

          </IconButton>
             
             </InputRightElement>
             </InputGroup>
         </Flex>
    )
}

export {CommentInput}