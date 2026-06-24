import React from "react";

interface TornPaperDividerProps {
  image: string;
  isBottom?: boolean;
  className?: string;
}

export default function TornPaperDivider({
  image,
  isBottom = false,
  className = "",
}: TornPaperDividerProps) {
  return (
    <img
      src={image}
      alt=""
      className={`w-full block select-none pointer-events-none ${
        isBottom ? "rotate-180" : ""
      } ${className}`}
    />
  );
}