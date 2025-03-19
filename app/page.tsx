import { Box, Button, Container, Flex, Heading, Input, Link, Text, Image } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";

export default function HeroSection() {
  return (
    <Box>
      {/* Announcement Banner */}
      <Box bg="blue.50" py={2} px={4} textAlign="center">
        <Text color="blue.700">
          Accelerate your teams' work with Atlassian Intelligence (AI) features 🤖 now available for all Premium and Enterprise!{" "}
          <Link color="blue.600" textDecoration="underline" href="#">
            Learn more
          </Link>
          .
        </Text>
      </Box>

      {/* Navigation Bar */}
      <Box as="nav" bg="white" py={3} px={6}>
        <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
          <Flex align="center">
            <Image src="/logo.png" alt="Trello Logo" height="100px" />
          </Flex>
          <Flex gap={8} display={{ base: "none", md: "flex" }}>
            <Link fontWeight="500">Features</Link>
            <Link fontWeight="500">Solutions</Link>
            <Link fontWeight="500">Plans</Link>
            <Link fontWeight="500">Pricing</Link>
            <Link fontWeight="500">Resources</Link>
          </Flex>
          <Flex gap={4}>
            <Button variant="ghost" fontWeight="500">Log in</Button>
            <Button colorScheme="blue" fontWeight="500">Get Trello for free</Button>
          </Flex>
        </Flex>
      </Box>
      
      {/* Hero Section */}
      <Box bg="#F2F2F4">
        <Container maxW="container.xl" minH="calc(100vh - 120px)" py={16} >
          <Flex 
            direction={{ base: "column", md: "row" }} 
            align="flex-start" 
            justify="space-between" 
            gap={10}
            position="relative"
          >
            <Box maxW={{ base: "100%", md: "50%" }} pt={8} >
              <Heading 
                as="h1" 
                fontSize={{ base: "5xl", md: "6xl" }}
                lineHeight="1.1"
                mb={8}
                fontWeight="black"
                color="gray.900"
              >
                Capture, organize, and tackle your to-dos from anywhere.
              </Heading>
              <Text fontSize="2xl" mb={10} color="gray.700" lineHeight="1.4">
                Escape the clutter and chaos—unleash your productivity with Trello.
              </Text>
              <Flex direction={{ base: "column", sm: "row" }} gap={4} mb={8}>
                <Input 
                  placeholder="Email" 
                  size="lg" 
                  bg="white"
                  borderColor="gray.300"
                  fontSize="lg"
                  height="56px"
                />
                <Button 
                  colorScheme="blue" 
                  size="lg"
                  px={8}
                  whiteSpace="nowrap"
                  height="56px"
                  fontSize="lg"
                >
                  Sign up - it's free!
                </Button>
              </Flex>
              <Flex align="center">
                <Button
                  leftIcon={<FaPlay />}
                  variant="link"
                  color="blue.500"
                  fontSize="lg"
                  fontWeight="medium"
                >
                  Watch video
                </Button>
              </Flex>
            </Box>
            <Box 
              maxW={{ base: "100%", md: "50%" }} 
              position="relative"
              height={{ base: "auto", md: "600px" }}
              width="100%"
            >
              <Box 
                position="absolute"
                right="-100px"
                top="50%"
                transform="translateY(-50%)"
                width="120%"
                maxW="600px"
              >
                <Image 
                  src="/mockup.png" 
                  alt="Trello Board Preview" 
                  width="100%"
                  height="auto"
                  objectFit="contain"
                />
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
}
