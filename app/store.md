"use client"

import { Box, Button, Container, Flex, Heading, Input, Link, Text, Image, Stack, Icon } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";

export default function HeroSection() {
    return (
        <Box minH="100vh" display="flex" flexDirection="column">
            <Box position="relative" pb={3} height="75px">
                <Container maxW="1800px" py={3}>
                    <Box position="absolute" left={100} top={3}>
                        <Image src="/logo.png" alt="Betr Beta Logo" height="50px" />
                    </Box>
                    
                    <Box position="absolute" right={250} top={3}>
                        <Button 
                            color="#1155B2" 
                            borderColor="#1155B2"
                            variant="outline" 
                            size="lg"
                            fontWeight="800"
                            borderRadius="md"
                            fontSize="lg"
                            px={6}
                            py={6}
                            height="25px"
                            _hover={{ bg: 'transparent', opacity: 0.8 }}
                        >
                            Book a Demo
                        </Button>
                    </Box>
                </Container>
                <Box position="absolute" bottom={0} left={0} right={0} height="1px" bg="gray.200" />
            </Box>

            <Box flex="1" display="flex" alignItems="flex-start" pt={8}>
                <Container maxW="1800px" p={0}>
                    <Flex 
                        direction={{ base: "column", lg: "row" }} 
                        align="center" 
                        justify="space-between" 
                        gap={4}
                    >
                        {/* Left Content */}
                        <Stack spacing={6} maxW="800px">
                            <Heading fontSize="72px" lineHeight="1.1">
                                Your All-in-One{" "}
                                <Text as="span" color="#1155B2" display="inline">
                                    Email
                                </Text>{" "}
                                <Text as="span" color="#1155B2" display="block">
                                    Outreach
                                </Text>
                                <Text as="span" color="#1155B2" display="inline">
                                    Optimisation
                                </Text>
                                {" "}Tool
                            </Heading>
                            
                            <Text fontSize="2xl" color="gray.600" maxW="650px">
                                With Smart Send Time, Auto Segmentation, and Bot Detection Analytics, 
                                the Emact platform helps you achieve your engagement goals with less effort. 
                                Start optimizing your email strategy today. Choose results today.
                            </Text>

                            <Box>
                                <Button 
                                    size="lg"
                                    backgroundColor="#1155B2" 
                                    color="white" 
                                    px={8} 
                                    mb={2}
                                    fontSize="xl"
                                    py={7}
                                    height="auto"
                                >
                                    Start Optimizing Your Email Outreach
                                </Button>
                                
                                <Flex align="center" gap={2}>
                                    <Icon as={BsCheckCircleFill} color="green.500" boxSize={5} />
                                    <Text color="#1155B2" fontSize="md">
                                        Try us free | No sign up required | Privacy friendly
                                    </Text>
                                </Flex>
                            </Box>
                        </Stack>

                        {/* Right Illustration */}
                        <Box flex={1} position="relative" h="700px" display="flex" alignItems="center">
                            <Image 
                                src="/mockup.png" 
                                alt="Email Optimization Platform"
                                w="full"
                                h="full"
                                objectFit="contain"
                                ml={8}
                            />
                        </Box>
                    </Flex>
                </Container>
            </Box>
        </Box>
    );
}
