import { Box, Container, Heading, Text, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={10} align="stretch">
        {/* Hero Section */}
        <Box textAlign="center" py={10} bg="gray.100" borderRadius="md">
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to Our SaaS Business
          </Heading>
          <Text fontSize="lg">
            We provide innovative solutions to streamline your business processes.
          </Text>
        </Box>

        {/* Value Proposition */}
        <Box py={10}>
          <Heading as="h2" size="xl" mb={4}>
            Our Value Proposition
          </Heading>
          <Text fontSize="md">
            Our platform offers unique features that help you save time and increase efficiency.
          </Text>
        </Box>

        {/* Features */}
        <Box py={10} bg="gray.100" borderRadius="md">
          <Heading as="h2" size="xl" mb={4}>
            Key Features
          </Heading>
          <VStack spacing={4} align="start">
            <Text>- Feature 1: Placeholder for feature description</Text>
            <Text>- Feature 2: Placeholder for feature description</Text>
            <Text>- Feature 3: Placeholder for feature description</Text>
          </VStack>
        </Box>

        {/* Call to Action */}
        <Box textAlign="center" py={10}>
          <Button as={Link} to="/signup" colorScheme="teal" size="lg">
            Sign Up for Waiting List
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Homepage;