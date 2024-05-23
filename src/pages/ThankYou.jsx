import { Box, Container, Heading, Text, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={10} align="center">
        <Box textAlign="center" py={10} bg="gray.100" borderRadius="md">
          <Heading as="h1" size="2xl" mb={4}>
            Thank You!
          </Heading>
          <Text fontSize="lg">
            You have successfully signed up for our waiting list.
          </Text>
        </Box>
        <Button as={Link} to="/" colorScheme="teal" size="lg">
          Go Back to Homepage
        </Button>
      </VStack>
    </Container>
  );
};

export default ThankYou;