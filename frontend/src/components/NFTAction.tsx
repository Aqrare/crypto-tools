import { Heading, Input, Button, InputProps, Box, VStack } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

interface NFTActionInput {
  onChange: InputProps["onChange"];
  placeholder: string;
  type?: string;
}

interface NFTActionProps {
  title: string;
  inputs: NFTActionInput[];
  onSubmit: () => void;
  buttonText: string;
}

const NFTAction: React.FC<NFTActionProps> = ({
  title,
  inputs,
  onSubmit,
  buttonText,
}) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={6}
      m={4}
      width="1000px"
      maxWidth="1000px"
      boxShadow="0 0 10px #00ffff, 0 0 20px #00ffff"
      bg="rgba(0, 0, 0, 0.8)"
      color="white"
      transition="all 0.3s ease"
      _hover={{
        boxShadow: "0 0 15px #00ffff, 0 0 30px #00ffff, 0 0 45px #00ffff",
      }}
    >
      <VStack spacing={4} align="stretch">
        <Heading
          size="md"
          mb={4}
          textShadow="0 0 5px #00ffff"
        >
          {title}
        </Heading>
        {inputs.map((input, index) => (
          <Input
            key={index}
            onChange={input.onChange}
            placeholder={input.placeholder}
            type={input.type || "text"}
            borderColor="#00ffff"
            _hover={{ borderColor: "#ff00ff" }}
            _focus={{ borderColor: "#ff00ff", boxShadow: "0 0 0 1px #ff00ff" }}
          />
        ))}
        <Button
          onClick={onSubmit}
          bg="#00ffff"
          color="black"
          _hover={{
            bg: "#ff00ff",
            boxShadow: "0 0 10px #ff00ff, 0 0 20px #ff00ff",
          }}
        >
          {buttonText}
        </Button>
      </VStack>
    </Box>
  );
};

export default NFTAction;
