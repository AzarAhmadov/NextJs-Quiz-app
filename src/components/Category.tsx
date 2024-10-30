import React, { memo } from "react";
import { TypeCategory } from "@/types/types";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

const Category: React.FC<TypeCategory> = ({ getFindCatagory }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      gapX="1.5rem"
      justifyContent="center"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="0.5rem"
        w={{ base: "2.5rem", md: "3.5rem" }}
        h={{ base: "2.5rem", md: "3.5rem" }}
        bg={getFindCatagory.color}
      >
        <Image
          alt={getFindCatagory.label}
          src={getFindCatagory.icon}
          width={35}
          height={35}
        />
      </Box>
      <Text
        fontSize={{ base: "1.125rem", md: "1.75rem" }}
        fontWeight="500"
        color="text-dark-navy"
      >
        {getFindCatagory.link.replace(
          getFindCatagory.link[0],
          getFindCatagory.link[0].toUpperCase()
        )}
      </Text>
    </Box>
  );
};

export default memo(Category);
