import React from "react";
import { Box, Flex, Image, Text, useDisclosure } from "@chakra-ui/react";

interface VisionCardProps {
  className?: string;
}

export const VisionCard: React.FC<VisionCardProps> = ({ className }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      w="750px"
      h="300px"
      bg="white"
      border="1px solid #ccc"
      boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
      borderRadius="16px"
      overflow="hidden"
      position="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <Box w="300px" h="300px">
        <Image
          src="./src/imgs/us_vision.png"
          alt="Placeholder Image"
          w="100%"
          h="100%"
          borderRadius="6px 0 0 6px"
        />
      </Box>
      <Box
        w="450px"
        h="300px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        bg="#f9f9f9"
        borderRadius="0 6px 6px 0"
        position="relative"
        overflow="hidden"
      >
        <Text
          fontSize="36px"
          fontWeight="bold"
          fontFamily="'Abel', sans-serif"
          zIndex="1"
          transition="opacity 0.5s ease-in-out"
          opacity={isOpen ? 0 : 1}
        >
          VISION
        </Text>
        <Box
          position="absolute"
          top="0"
          left={isOpen ? "0" : "-100%"}
          w="100%"
          h="100%"
          bg="linear-gradient(#92bCa6, #52b39d)"
          color="white"
          display="flex"
          justifyContent="center"
          alignItems="center"
          fontSize="22px"
          textAlign="justify"
          padding="0 30px"
          boxSizing="border-box"
          fontWeight="bold"
          fontFamily="'Abel', sans-serif"
          zIndex="2"
          transition="left 0.4s ease-in-out"
        >
          To be global leaders in the technology field, helping our clients
          enhance their quality of life and achieve new levels of success
          through disruptive technologies and effective digital strategies.{" "}
        </Box>
      </Box>
    </Flex>
  );
};
