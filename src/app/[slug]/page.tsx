"use client";

import QuestionArea from "@/components/ui/QuestionArea";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { getCategory } from "../actions/actions";
import { useAppDispatch } from "@/lib/utility/hooks";
import { getCorrectAnswers, getWrongAnswers } from "@/lib/features/quizSlice";
import Completed from "@/components/Completed";
import Image from "next/image";
import Loading from "@/components/loading";
import { ProgressBar, ProgressRoot } from "@/components/ui/progress";
import { redirect } from "next/navigation";

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
      setSelectedOption(null);
    } else {
      setCurrent(category[slug].length);
    }
  };

  const variants = ["A", "B", "C", "D"];

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return redirect("/");
  }

  const isEnd = current < category[slug]?.length;
  const totalQuestions = category[slug]?.length;
  const progressValue = totalQuestions ? (current / totalQuestions) * 100 : 0;

  return (
    <>
      {isEnd ? (
        <Flex
          justifyContent="space-between"
          direction={{ base: "column", lg: "row" }}
          marginTop="85px"
          gapY={{base:'2.5rem', md:"4rem"}}
        >
          <Box width={{ base: "100%", lg: "29.063rem" }}>
            <Text
              color="text-gray-navy"
              fontStyle="italic"
              fontWeight="400"
              fontSize={{base:"0.875rem", md:"2.25rem"}}
              marginBottom={{base:"0.75rem ", md:"1.688rem"}}
            >
              Question {current + 1} of {category[slug]?.length}
            </Text>
            <Text color="text-dark-navy" fontWeight="500" fontSize={{base:"1.25rem", md:"2.25rem"}}>
              {category[slug]?.[current]?.question}
            </Text>

            <ProgressRoot
              marginTop={{ base: "2.5rem", lg: "10.25rem" }}
              colorPalette="purple"
              value={progressValue}
            >
              <ProgressBar borderRadius="3rem" />
            </ProgressRoot>
          </Box>

          <Flex direction="column">
            <Flex
              pointerEvents={selectedOption ? "none" : ""}
              width={{ base: "100%", lg: "35.25rem" }}
              direction="column"
              gap={{base:"0.75rem", md:"1.5rem"}}
            >
              {category[slug][current].options.map(
                (option: string, index: number) => (
                  <QuestionArea
                    correct={category[slug][current].answer === selectedOption}
                    wrong={category[slug][current].answer !== selectedOption}
                    selectedOption={selectedOption === option}
                    key={index}
                    handleClick={() => handleSelect(option)}
                    variantsText={variants[index]}
                    variants={true}
                  >
                    {option}
                  </QuestionArea>
                )
              )}
            </Flex>
            <Button
              marginTop="2rem"
              type="button"
              onClick={handleSubmit}
              fontSize={{base:"1.125rem", md:'1.5rem'}}
              fontWeight="500"
              bg="#A729F5"
              paddingY={{base:"1.188rem", md:"2rem"}}
              borderRadius={{base:"0.95rem", md:"1.5rem"}}
              _hover={{ opacity: "0.7" }}
              className="button"
            >
              {selectedOption ? "Next question" : "Submit Answer"}
            </Button>

            {status && (
              <Flex
                alignItems="center"
                justifyContent="center"
                gapX="0.813rem"
                color="#EE5454"
                fontWeight="400"
                textAlign="center"
                fontSize={{base:"1.125rem", md:"1.2rem"}}
                marginTop={{base:"1rem", md:"2.5rem"}}
              >
                <Image src="/wrong.svg" width={30} height={30} alt="wrong" />
                Please select an answer
              </Flex>
            )}
          </Flex>
        </Flex>
      ) : (
        <Completed />
      )}
    </>
  );
};

export default Page;
