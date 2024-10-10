 import * as React from "react";
 import { Box, Flex, Image, Text, useDisclosure } from '@chakra-ui/react';
 import '../styles/colores.css'
 import '../styles/infocard.css'

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
            height="100%"   
            width='100%'
            
        >
            <Box w="100%" h="50%">
                <Image
                    src={imageSrc}
                    alt={`${title} Image`}
                    w="100%"
                    h="100%"
                />
            </Box>
            <Box
                className="box_text--tittle"
                w="100%"
                h="50%"
                display="flex"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                position="relative"
                overflow="hidden"
                bg='linear-gradient(180deg, black, rgba(14,53,84,0.8))'
            >
                <Text
                    fontSize="3rem"
                    fontWeight="bolder"
                    fontFamily='var(--font-makina)'
                    zIndex="1"
                    color='var(--White)'
                    transition="opacity 0.5s ease-in-out"
                    opacity={isOpen ? 0 : 1}
                >
                    {title}
                </Text>
                <Box
                    className="box-gradient"
                    position="absolute"
                    top={isOpen ? "0" : "100%"}  
                    left="0"  
                    w="100%"
                    h="100%"  
                    bg='linear-gradient(180deg, black, rgba(87,87,89,0.4))'
                    color="white"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    fontSize="1rem"
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

