import React from "react";
import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  VStack,
} from "@chakra-ui/react";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  hash: any;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  hash,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(10px)" />
      <ModalContent
        bg="rgba(30, 30, 30, 0.9)"
        border="2px solid"
        borderColor="cyan.400"
        borderRadius="xl"
        boxShadow="0 0 20px #0ff, 0 0 30px #0ff, 0 0 40px #0ff, 0 0 50px #0ff"
        p={6}
      >
        <ModalHeader
          color="white"
          fontSize="3xl"
          fontWeight="bold"
          textAlign="center"
          textShadow="0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff"
        >
          {title}
        </ModalHeader>
        <ModalCloseButton color="white" _hover={{ color: "pink.300" }} />
        <ModalBody>
          <VStack spacing={4}>
            <Text
              fontSize="6xl"
              color="green.300"
              textShadow="0 0 10px #0f0, 0 0 20px #0f0, 0 0 30px #0f0"
            >
              ✓
            </Text>
            <Text color="white" fontSize="lg">
              {message}
            </Text>
            {hash && (
              <Box color="white" fontSize="sm" mt={4}>
                <Text>Transaction Hash: {hash}</Text>
                {/* 必要に応じて他の transaction result の情報を表示 */}
              </Box>
            )}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmationModal;
