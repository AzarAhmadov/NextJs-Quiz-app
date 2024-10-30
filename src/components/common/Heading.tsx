"use client";

import React, { memo } from "react";
import { ColorModeButton } from "@/components/ui/color-mode";
import { MdOutlineWbSunny } from "react-icons/md";
import { GoMoon } from "react-icons/go";
import { Box, Flex, Text } from "@chakra-ui/react";
import { categories } from "@/constants/constants";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Heading: React.FC = () => {
  const path = usePathname().replace("/", "");
  const getFindCatagory = categories.find((item) => item.link === path);

  return (
    <Box
      h="56px"
      alignItems="center"
      display={getFindCatagory && "flex"}
      justifyContent="space-between"
    >
      {getFindCatagory && (
        <Box display="flex" alignItems="center" gapX="1.5rem">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="0.5rem"
            width="3.5rem"
            h="3.5rem"
            bg={getFindCatagory.color}
          >
            <Image
              alt={getFindCatagory.label}
              src={getFindCatagory.icon}
              width={42}
              height={42}
            />
          </Box>
          <Text fontSize="1.75rem" fontWeight="500" color="text-dark-navy">
            {getFindCatagory.link.replace(
              getFindCatagory.link[0],
              getFindCatagory.link[0].toUpperCase()
            )}
          </Text>
        </Box>
      )}
      <Flex h="56px" alignItems="center" justifyContent="end" gap="1rem">
        <MdOutlineWbSunny size="1.5rem" />
        <ColorModeButton />
        <GoMoon size="1.5rem" />
      </Flex>
    </Box>
  );
};

export default memo(Heading);
