/** @jsxRuntime classic */
/** @jsx jsx */
import { Box, jsx } from "theme-ui";
import Image from "next/image";

export const Avatar = (props) => (
  <Box
    sx={{
      width: "144px",
      height: "144px",
      position: "absolute",
      top: "50%",
      left: 0,
      transform: "translateY(-50%)",
      borderRadius: "50%",
      overflow: "hidden",
      boxShadow: "2px 8px 32px -8px #ed4337",
    }}
  >
    <Image
      sx={{
        borderRadius: "50%",
        overflow: "hidden",
      }}
      layout="fill"
      src="/speakers/test-image.jpg"
    />
  </Box>
);
