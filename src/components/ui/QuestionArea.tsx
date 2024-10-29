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
}) => {
  return (
    <Flex
      align="center"
      bg="white"
      p="1.25rem"
      w="100%"
      maxW="35.25rem"
      borderRadius="1.5rem"
      _hover={{ boxShadow: "xl" }}
      onClick={() => handleClick?.(item.link)}
      className="question"
    >
      <Box display="flex" alignItems="center" cursor="pointer" width="full">
        {icon && (
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
            bg="#F4F6FA"
            w="3.5rem"
            h="3.5rem"
            className="text-gray-navy"
            borderRadius="0.5rem"
            fontWeight="500"
            mr="2rem"
            fontSize="1.75rem"
          >
            A
          </Text>
        )}
        <Text fontSize="1.75rem" fontWeight="500" color="text-purple">
          {children}
        </Text>
      </Box>
    </Flex>
  );
};

export default memo(QuestionArea);
