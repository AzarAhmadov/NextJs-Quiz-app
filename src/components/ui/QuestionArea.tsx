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
      w="100%"
      maxW="35.25rem"
      borderRadius="1.5rem"
      _hover={{ boxShadow: "xl", outline: "3px solid #A729F5" }}
      onClick={handleClick}
      className={`question ${(isCorrect && "correct") || (isWrong && "wrong")}`}
    >
      <Box
        display="flex"
        alignItems="center"
        p="1.25rem"
        cursor="pointer"
        width="full"
      >
        {icon && item && (
          <Flex
            align="center"
            justify="center"
            bg={item.color}
            w="56px"
            h="50px"
            borderRadius="0.70rem"
            mr="2rem"
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
            w="3rem"
            h="2.5rem"
            color={selectedOption ? "#fff" : "#313e51"}
            borderRadius="0.5rem"
            fontWeight="500"
            mr="2rem"
            fontSize="1.75rem"
          >
            {variantsText}
          </Text>
        )}

        <Flex
          alignItems="center"
          justifyContent="space-between"
          fontSize="1.45rem"
          fontWeight="500"
          color="text-purple"
          w="100%"
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
