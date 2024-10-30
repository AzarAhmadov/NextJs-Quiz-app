import { Box, Text, Flex } from "@chakra-ui/react";
import React from "react";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import { resetQuiz, useQuiz } from "@/lib/features/quizSlice";
import { categories } from "@/constants/constants";
import { useQuery } from "@tanstack/react-query";
import { getCategory } from "@/app/actions/actions";
import Category from "./Category";
import { useAppDispatch } from "@/lib/utility/hooks";

const Completed = () => {
  const slug = usePathname().replace("/", "");
  const getFindCatagory = categories.find((item) => item.link === slug);
  const dispatch = useAppDispatch();
  const { correctAnswer } = useQuiz();
  const router = useRouter();

  console.log(correctAnswer)

  const handleClick = () => {
    dispatch(resetQuiz());
    router.push("/");
  };

  const { data: category } = useQuery({
    queryKey: ["category"],
    queryFn: () => getCategory(slug),
    enabled: !!slug,
  });

  return (
    <Flex
      paddingTop="85px"
      justifyContent="space-between"
      direction={{ base: "column", lg: "row" }}
      gap={{ base: "2.5rem", md: "4rem" }}
    >
      <Box
        lineHeight={{ base: "3rem", md: "5rem" }}
        className="title"
        fontWeight="300"
        fontSize={{ base: "2.5rem", md: "4rem" }}
      >
        Quiz completed
        <br />
        <Text as="span" fontWeight="500">
          You scored...
        </Text>
      </Box>

      <Box>
        <Box
          w={{ base: "100%", lg: "35.25rem" }}
          textAlign="center"
          paddingY="3rem"
          bg="#fff"
          borderRadius="1.5rem"
          boxShadow="0px 16px 40px 0px rgba(143, 160, 193, 0.14)"
          className="complete"
        >
          {getFindCatagory && <Category getFindCatagory={getFindCatagory} />}
          <Text
            color="#313E51"
            fontWeight="500"
            fontSize={{ base: "5.5rem", md: "9rem" }}
          >
            {correctAnswer}
          </Text>
          <Text
            color="#626C7F"
            fontSize={{ base: "1.125rem", md: "1.5rem" }}
            fontWeight="400"
          >
            out of {category[slug]?.length}
          </Text>
        </Box>

        <Button
          onClick={() => handleClick()}
          marginTop="2rem"
          type="button"
          fontSize={{ base: "1.125rem", md: "1.5rem" }}
          fontWeight="500"
          bg="#A729F5"
          w="100%"
          paddingY={{ base: "1.188rem", md: "2rem" }}
          borderRadius={{ base: "0.75rem", md: "1.5rem" }}
          _hover={{ opacity: "0.7" }}
          className="button"
        >
          Play Again
        </Button>
      </Box>
    </Flex>
  );
};

export default Completed;
