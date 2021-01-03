/** @jsxRuntime classic */
/** @jsx jsx */
import { Box, jsx } from "theme-ui";
import Image from "next/image";

export const Avatar = (props) => (
  <Box
    sx={{
      width: ["80px", "144px"],
      height: ["80px", "144px"],
      borderRadius: "50%",
      overflow: "hidden",
      boxShadow: "2px 8px 32px -8px #ed4337",
      userSelect: "none",
    }}
    {...props}
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
