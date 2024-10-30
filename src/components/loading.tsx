import { Box } from "@chakra-ui/react";
import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="rgba(255, 255, 255, 0.8)"
      backdropFilter="blur(10px)"
      zIndex="1000"
    >
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#A729F5"
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </Box>
  );
};

export default Loading;
