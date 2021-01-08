/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

type Props = {
  width?: string;
  height?: string;
  src: string;
  alt: string;
  objectFit?: "contain" | "cover";
  layout?: "fill";
  sx?: object;
  className?: string;
};

export const Image: React.FC<Props> = ({
  src,
  alt,
  width,
  height,
  objectFit,
  layout,
  className,
}) => {
  let finalWidth = width;
  let finalHeight = height;

  if (layout === "fill") {
    finalWidth = finalHeight = "100%";
  }

  return (
    <img
      src={src}
      alt={alt}
      sx={{ width: finalWidth, height: finalHeight, objectFit }}
      className={className}
    />
  );
};
