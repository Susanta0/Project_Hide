import { FileUpload } from "./FileUpload";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
export const Place = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Fill Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
