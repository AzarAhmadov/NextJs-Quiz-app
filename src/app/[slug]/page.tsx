"use client";

import Heading from "@/components/common/Heading";
import { Box, Flex, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import React from "react";

const page = () => {
  const pathname = usePathname();

  return (
    <>
      <Heading pathname={pathname} />
      <Flex marginTop="85px">
        <Box width="465px">
          <Text
            color="text-gray-navy"
            fontStyle="italic"
            fontWeight="400"
            fontSize="20px"
            marginBottom="27px"
          >
            Question 6 of 10
          </Text>
          <Text color="text-dark-navy" fontWeight="500" fontSize="36px">
            Which of these color contrast ratios defines the minimum WCAG 2.1
            Level AA requirement for normal text?
          </Text>
        </Box>
      </Flex>
    </>
  );
};

export default page;
