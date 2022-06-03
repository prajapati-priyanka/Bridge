import { Modal, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, ModalBody,Textarea, ModalFooter,Flex,Box,FormLabel,Input, Button } from "@chakra-ui/react";
import {BsCardImage} from "react-icons/bs"


const CreatePostModal = ({isOpen, onClose}) =>{

  
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add Post</ModalHeader>
                <ModalCloseButton />
                <ModalBody size="lg">
                    <Textarea
                        placeholder="Write Whatever you feel like sharing"
                        size="lg"
                        resize="none"
                    />
                </ModalBody>
                <ModalFooter>
                    <Flex justifyContent ="space-between" w="100%" alignItems="center">

                  
                    <Box>
                        <FormLabel cursor="pointer">
                            <Input
                             type="file"
                             accept="image/*,video/*"
                             position="absolute"
                             opacity="0"
                             bgColor="red.100"
                             p="0"
                             visibility="hidden"

                             />
                             <BsCardImage fontSize="28px" />
                        </FormLabel>
                    </Box>
                    <Button>
                        POST
                    </Button>
                    </Flex>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export {CreatePostModal}