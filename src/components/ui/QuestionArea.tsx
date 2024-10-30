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
}) => {
  return (
    <Flex
      bg="white"
      align="center"
      w="100%"
      maxW="35.25rem"
      borderRadius="1.5rem"
      _hover={{ boxShadow: "xl", outline: "3px solid #A729F5" }}
      onClick={handleClick}
      outline={selectedOption ? "3px solid #A729F5" : ""}
      className="question"
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
            w="12"
            h="12"
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
            bg={selectedOption ? "#A729F5" : "#F4F6FA"}
            w="3.5rem"
            h="3.5rem"
            color={selectedOption ? "#fff" : " #313e51"}
            borderRadius="0.5rem"
            fontWeight="500"
            mr="2rem"
            fontSize="1.75rem"
          >
            {variantsText}
          </Text>
        )}
        <Text fontSize="1.45rem" fontWeight="500" color="text-purple">
          {children}
        </Text>
      </Box>
    </Flex>
  );
};

export default memo(QuestionArea);
