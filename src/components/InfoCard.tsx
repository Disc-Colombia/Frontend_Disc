import * as React from "react";
import { Box, Flex, Image, Text, useDisclosure } from '@chakra-ui/react';

interface InfoCardProps {
    title: string;
    content: string;
    imageSrc: string;
    className?: string;
}

export const InfoCard: React.FC<InfoCardProps> = ({ title, content, imageSrc, className }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Flex
            w="450px"
            h="200px"
            bg="white"
            border="1px solid #ccc"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
            borderRadius="16px"
            overflow="hidden"
            position="relative"
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            className={className}
        >
            <Box w="300px" h="300px">
                <Image
                    src={imageSrc}
                    alt={`${title} Image`}
                    w="100%"
                    h="100%"
                    borderRadius="6px 0 0 6px"
                />
            </Box>
            <Box
                w="350px"
                h="200px"
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
                    fontSize="20px"
                    fontWeight="bold"
                    fontFamily="'Abel', sans-serif"
                    zIndex="1"
                    transition="opacity 0.5s ease-in-out"
                    opacity={isOpen ? 0 : 1}
                >
                    {title}
                </Text>
                <Box
                    position="absolute"
                    top="0"
                    left={isOpen ? "0" : "-100%"}
                    w="100%"
                    h="100%"
                    bg="linear-gradient(#92bCa6,#52b39d)"
                    color="white"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    fontSize="12px"
                    textAlign="justify"
                    padding="0 30px"
                    boxSizing="border-box"
                    fontWeight="bold"
                    fontFamily="'Abel', sans-serif"
                    zIndex="2"
                    transition="left 0.4s ease-in-out"
                >
                    {content}
                </Box>
            </Box>
        </Flex>
    );
};
