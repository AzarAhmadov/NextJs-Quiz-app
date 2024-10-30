"use client";

import QuestionArea from "@/components/ui/QuestionArea";
import { categories } from "@/constants/constants";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <Flex marginTop="6rem" justifyContent="space-between">
      <Box lineHeight="5rem" color="text-dark-navy">
        <Box className="title" fontSize="4rem" fontWeight="300">
          Welcome to the <br />
          <Text as="span" fontWeight="500">
            Frontend Quiz!
          </Text>
        </Box>
        <Text
          marginTop="2rem"
          fontWeight="400"
          fontSize="1.25rem"
          color="text-gray-navy"
          fontStyle="italic"
          className="bottom-title"
        >
          Pick a subject to get started.
        </Text>
      </Box>

      <Flex width="35.25rem" direction="column" gap="1.5rem">
        {categories.map((item, index) => (
          <QuestionArea
            handleClick={() => handleClick(item.link)}
            icon={true}
            variants={false}
            item={item}
            key={index}
          >
            {item.label}
          </QuestionArea>
        ))}
      </Flex>
    </Flex>
  );
};

export default Page;
