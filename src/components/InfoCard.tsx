 import * as React from "react";
 import { Box, Flex, Image, Text, useDisclosure } from '@chakra-ui/react';
 import '../styles/colores.css'

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
            bg="white"
            border="1px solid #ccc"
            boxShadow="0 4px 8px rgba(0, 0, 0, 0.1)"
            borderRadius="16px"
            overflow="hidden"
            position="relative"
            onMouseEnter={onOpen}
            onMouseLeave={onClose}
            className={className}
            flexDirection="column"
        >
            <Box w="100%" h="100%">
                <Image
                    src={imageSrc}
                    alt={`${title} Image`}
                    w="100%"
                    h="100%"
                />
            </Box>
            <Box
                w="100%"
                h="400px"
                display="flex"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                bg="#f9f9f9"
                position="relative"
                overflow="hidden"
            >
                <Text
                    fontSize="3rem"
                    fontWeight="bold"
                    fontFamily='var(--font-makina)'
                    zIndex="1"
                    transition="opacity 0.5s ease-in-out"
                    opacity={isOpen ? 0 : 1}
                >
                    {title}
                </Text>
                <Box
                    position="absolute"
                    top={isOpen ? "0" : "100%"}  
                    left="0"  
                    w="100%"
                    h="100%"  
                    bg="linear-gradient(#92bCa6,#52b39d)"
                    color="white"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    fontSize="1.2rem"
                    textAlign="justify"
                    padding="0 30px"
                    boxSizing="border-box"
                    fontFamily= 'var(--montserrat-font-family)'
                    zIndex="2"
                    transition="top 0.4s ease-in-out"  
                >
                    {content}
                </Box>
            </Box>
        </Flex>
    );
};

