"use client";

import React, { memo } from "react";
import { ColorModeButton } from "@/components/ui/color-mode";
import { MdOutlineWbSunny } from "react-icons/md";
import { GoMoon } from "react-icons/go";
import { Box, Flex } from "@chakra-ui/react";
import { categories } from "@/constants/constants";
import { usePathname } from "next/navigation";
import Category from "../Category";

const Heading: React.FC = () => {
  const path = usePathname().replace("/", "");
  const getFindCatagory = categories.find((item) => item.link === path);

  return (
    <Box
      h="3.5.rem"
      paddingTop={{ base: "1.625rem", lg: "5.188rem", md: "2.5rem" }}
      alignItems="center"
      display={getFindCatagory && "flex"}
      justifyContent="space-between"
    >
      {getFindCatagory && <Category getFindCatagory={getFindCatagory} />}
      <Flex h="3.5rem" alignItems="center" justifyContent="end" gap="1rem">
        <MdOutlineWbSunny size="1.5rem" />
        <ColorModeButton />
        <GoMoon size="1.5rem" />
      </Flex>
    </Box>
  );
};

export default memo(Heading);
