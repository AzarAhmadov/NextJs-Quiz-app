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
    <Flex
      direction={{ base: "column", lg: "row" }}
      gapX="2rem"
      marginTop={{ base: "3rem", md: "6rem" }}
      justifyContent="space-between"
      gapY="2.5rem"
    >
      <Box lineHeight={{ base: "3rem", md: "5rem" }} color="#313E51">
        <Box
          className="title"
          fontSize={{ base: "2.5rem", md: "4rem" }}
          fontWeight="300"
        >
          Welcome to the <br />
          <Text as="span" fontWeight="500">
            Frontend Quiz!
          </Text>
        </Box>
        <Text
          marginTop={{ base: "1rem", md: "2rem" }}
          fontWeight="400"
          fontSize="1.25rem"
          color="text-gray-navy"
          fontStyle="italic"
          className="bottom-title"
        >
          Pick a subject to get started.
        </Text>
      </Box>

      <Flex
        width={{ base: "100%", lg: "35.25rem" }}
        direction="column"
        gap={{base:"0.75rem", md:"1.5rem"}}
      >
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
