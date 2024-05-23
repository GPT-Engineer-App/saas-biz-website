import { Box, Flex, Link, Spacer, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" color="white" fontWeight="bold" fontSize="xl">
            SaaS Business
          </Link>
        </Box>
        <Spacer />
        <Flex alignItems="center">
          <Link as={RouterLink} to="/signup" color="white" mr={4}>
            Sign Up
          </Link>
          <Button as={RouterLink} to="/" colorScheme="teal" variant="outline">
            Home
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;