import { Box, Button, Container, Flex, Heading, Input, Link, Text, Image } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";

export default function HeroSection() {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="white" py={3} px={6} boxShadow="sm">
        <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
          <Flex align="center">
            <Image src="/logo.png" alt="Trello Logo"  mr={2} />
          </Flex>
          <Flex gap={6} display={{ base: "none", md: "flex" }}>
            <Link href="#">Features</Link>
            <Link href="#">Solutions</Link>
            <Link href="#">Plans</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">Resources</Link>
          </Flex>
          <Flex gap={4}>
            <Button variant="ghost">Log in</Button>
            <Button colorScheme="blue">Get Trello for free</Button>
          </Flex>
        </Flex>
      </Box>
      
      {/* Hero Section */}
      <Container maxW="container.xl" py={20} textAlign="left">
        <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
          <Box maxW={{ base: "100%", md: "50%" }}>
            <Heading as="h1" size="xl" mb={4}>
              Capture, organize, and tackle your to-dos from anywhere.
            </Heading>
            <Text fontSize="lg" mb={6}>
              Escape the clutter and chaos—unleash your productivity with Trello.
            </Text>
            <Flex>
              <Input placeholder="Email" size="lg" width="60%" mr={2} />
              <Button colorScheme="blue" size="lg">Sign up – it's free!</Button>
            </Flex>
            <Flex align="center" mt={4}>
              <FaPlay size={14} />
              <Link ml={2} fontSize="lg" href="#">Watch video</Link>
            </Flex>
          </Box>
          <Box maxW={{ base: "100%", md: "50%" }} textAlign="center">
            <Image src="/hero-image.png" alt="Trello Mobile" />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
