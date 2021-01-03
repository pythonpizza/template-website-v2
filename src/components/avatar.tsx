/** @jsxRuntime classic */
/** @jsx jsx */
import { Box, jsx } from "theme-ui";
import Image from "next/image";

export const Avatar = (props) => (
  <Box
    sx={{
      width: ["80px", "144px"],
      height: ["80px", "144px"],
      position: "absolute",
      top: [0, "50%"],
      left: ["50%", 0],
      transform: ["translate(-50%,-75%) scale(1)", "translateY(-50%)"],
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
