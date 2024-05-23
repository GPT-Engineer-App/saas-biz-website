import { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock API call
    setTimeout(() => {
      navigate("/thankyou");
    }, 1000);
  };

  return (
    <Container maxW="container.sm" py={10}>
      <Box bg="gray.100" p={8} borderRadius="md">
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="companyName" isRequired>
              <FormLabel>Company Name</FormLabel>
              <Input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </FormControl>
            <Button type="submit" colorScheme="teal" size="lg" width="full">
              Sign Up
            </Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
};

export default Signup;