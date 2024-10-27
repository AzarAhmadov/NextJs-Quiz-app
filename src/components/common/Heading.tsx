import { ColorModeButton } from "@/components/ui/color-mode";
import { MdOutlineWbSunny } from "react-icons/md";
import { GoMoon } from "react-icons/go";
import { Flex } from "@chakra-ui/react";
import React from "react";

const Heading = () => {
  return (
    <Flex alignItems="center" justifyContent="end" gap="16px">
      <MdOutlineWbSunny size="1.5rem" />
      <ColorModeButton />
      <GoMoon size="1.5rem" />
    </Flex>
  );
};

export default Heading;
