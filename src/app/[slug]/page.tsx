"use client";

import QuestionArea from "@/components/ui/QuestionArea";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { getCategory } from "../actions/actions";
import { useAppDispatch } from "@/lib/utility/hooks";
import { getCorrectAnswers, getWrongAnswers } from "@/lib/features/quizSlice";

const Page = () => {
  const slug = usePathname().replace("/", "");
  const dispatch = useAppDispatch();
  const [current, setCurrent] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [status, setStatus] = useState(false);

  const {
    data: category,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["category"],
    queryFn: () => getCategory(slug),
    enabled: !!slug,
  });

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setStatus(false);
  };

  const handleSubmit = () => {
    if (!selectedOption) {
      setStatus(true);
      return;
    }

    if (category[slug][current].answer === selectedOption) {
      dispatch(getCorrectAnswers());
    } else {
      dispatch(getWrongAnswers());
    }

    if (current < category[slug].length - 1) {
      setCurrent((prev) => prev + 1);
    }
    setSelectedOption(null);
  };

  const variants = ["A", "B", "C", "D"];

  if (isLoading) {
    return (
      <Text textAlign="center" marginTop="5rem">
        Loading...
      </Text>
    );
  }

  if (error) {
    return <Text color="red.500">Error fetching data: {error.message}</Text>;
  }

  return (
    <Flex justifyContent="space-between" marginTop="85px">
      <Box>
        <Box width="29.063rem">
          <Text
            color="text-gray-navy"
            fontStyle="italic"
            fontWeight="400"
            fontSize="1.25rem"
            marginBottom="1.688rem"
          >
            Question {current + 1} of {category[slug]?.length}
          </Text>
          <Text color="text-dark-navy" fontWeight="500" fontSize="2.25rem">
            {category[slug]?.[current]?.question || "Question not available"}
          </Text>
        </Box>
      </Box>

      <Flex width="35.25rem" direction="column" gap="1.5rem">
        {category[slug]?.[current]?.options?.length ? (
          category[slug][current].options.map(
            (option: string, index: number) => (
              <QuestionArea
                selectedOption={selectedOption === option}
                key={index}
                handleClick={() => handleSelect(option)}
                variantsText={variants[index]}
                variants={true}
              >
                {option}
              </QuestionArea>
            )
          )
        ) : (
          <Text color="text-gray" fontSize="1.25rem">
            No options available
          </Text>
        )}
        <Button
          type="button"
          onClick={handleSubmit}
          fontSize="1.5rem"
          fontWeight="500"
          bg="#A729F5"
          paddingY="2rem"
          borderRadius="1.5rem"
          _hover={{ opacity: "0.7" }}
          className="button"
        >
          {selectedOption ? "Next question" : "Submit Answer"}
        </Button>

        {status && (
          <Box
            color="#EE5454"
            fontWeight="400"
            textAlign="center"
            fontSize="1.2rem"
            marginTop="1rem"
          >
            Please select an answer
          </Box>
        )}
      </Flex>
    </Flex>
  );
};

export default Page;
