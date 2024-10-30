import React, { memo } from "react";
import { TypeCard } from "@/types/types";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

const QuestionArea: React.FC<TypeCard> = ({
  item,
  children,
  icon = false,
  handleClick,
  variants = true,
  variantsText,
  selectedOption,
  correct,
  wrong,
}) => {
  const isCorrect = correct && selectedOption;
  const isWrong = wrong && selectedOption;

  return (
    <Flex
      bg="white"
      align="center"
      width={{ base: "100%", lg: "35.25rem" }}
      borderRadius={{ base: "0.75rem", md: "1.5rem" }}
      _hover={{ boxShadow: "xl", outline: "3px solid #A729F5" }}
      onClick={handleClick}
      className={`question ${(isCorrect && "correct") || (isWrong && "wrong")}`}
    >
      <Box
        display="flex"
        alignItems="center"
        p={{ base: "0.75rem", lg: "1.125rem" }}
        cursor="pointer"
        width="full"
      >
        {icon && item && (
          <Flex
            align="center"
            justify="center"
            bg={item.color}
            w={{ base: "2.5rem", md: "3.5rem" }}
            h={{ base: "2.5rem", md: "3.5rem" }}
            flexShrink="0"
            borderRadius={{ base: "0.40rem", md: "0.70rem" }}
            mr={{ base: "1rem", md: "2rem" }}
          >
            <Image alt={item.label} src={item.icon} width={32} height={32} />
          </Flex>
        )}
        {variants && (
          <Text
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg={isCorrect ? "#26D782" : isWrong ? "#EE5454" : "#F4F6FA"}
            w={{ base: "2.5rem", md: "3.5rem" }}
            h={{ base: "2.5rem", md: "3.5rem" }}
            flexShrink="0"
            color={selectedOption ? "#fff" : "#313e51"}
            borderRadius="0.5rem"
            fontWeight="500"
            mr={{ base: "1rem", md: "2rem" }}
            fontSize={{ base: "1.125rem", md: "1.75rem" }}
          >
            {variantsText}
          </Text>
        )}

        <Flex
          alignItems="center"
          justifyContent="space-between"
          fontSize={{ base: "1.125rem", md: "1.45rem" }}
          fontWeight="500"
          w="100%"
          className="text-dark-navy"
        >
          {children}
          {isCorrect && (
            <Image src="/correct.svg" width={30} height={30} alt="correct" />
          )}
          {isWrong && (
            <Image src="/wrong.svg" width={30} height={30} alt="wrong" />
          )}
        </Flex>
      </Box>
    </Flex>
  );
};

export default memo(QuestionArea);
