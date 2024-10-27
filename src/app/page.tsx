import Heading from "@/components/common/heading";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

const page = () => {
  return (
    <>
      <Heading />
      <Box marginTop="99px" width="28.25rem" lineHeight="5rem" color="text-dark-navy">
        <Box fontSize="4rem" fontWeight="300">
          Welcome to the{" "}
          <Text fontWeight="500" opacity="0.8">
            Frontend Quiz!
          </Text>
        </Box>
        <Text
          marginTop="48px"
          fontWeight="400"
          fontSize="20px"
          color="text-gray-navy"
          fontStyle="italic"
        >
          Pick a subject to get started.
        </Text>
      </Box>
    </>
  );
};

export default page;
