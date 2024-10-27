import React, { memo } from "react";
import { TypeTitle } from "@/types/types";
import { Text } from "@chakra-ui/react";

const Title: React.FC<TypeTitle> = ({ children = "" }) => {
  return (
    <Text fontWeight="500" fontSize="1.75rem" color="text-dark-navy">
      {children}
    </Text>
  );
};

export default memo(Title);
