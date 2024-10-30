'use client'

import React from "react";
import { Box, Text, Button, Flex, Image } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const PageNotFound = () => {  
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <Box>
      <Flex  
        direction="column"
        align="center"
        justify="center"
        bgGradient="linear(to-r, teal.500, blue.500)"
        textAlign="center"
        padding={{ base: "2rem", md: "4rem" }}
        color="black"
      >
        <Image 
          src="/404.png" 
          width={{ base: "250px", md: "400px" }} 
          height={{ base: "100px", md: "200px" }}
          alt="Not Found"  
          mb={6} 
        />
        <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="bold" mb={4}>
          Oops! Page Not Found
        </Text>
        <Button
          color="black"
          size="lg"
          onClick={handleGoHome}
          borderRadius="full"
          paddingX={{ base: "1.5rem", md: "2rem" }}
        >
          Go to Homepage
        </Button>
      </Flex>
    </Box>
  );
};

export default PageNotFound;
