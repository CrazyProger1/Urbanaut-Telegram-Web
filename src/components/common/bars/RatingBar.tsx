"use client";

import React from "react";
import { StarIcon } from "@/components/common/icons";

interface Props {
  value?: number;
  size?: "sm" | "md" | "lg";
  onVote?: (value: number) => void;
  active?: boolean;
}
const RatingBar = ({
  value = 0,
  size = "sm",
  onVote,
  active = false,
}: Props) => {
  value = Math.round(value);
  const rating: boolean[] = Array(value).fill(true);
  rating.push(...Array(5 - value).fill(false));
  return (
    <div className="flex flex-row items-center">
      {rating.map((fill, index) => (
        <div key={index} onClick={() => active && onVote && onVote(index + 1)}>
          <StarIcon fill={fill} size={size} />
        </div>
      ))}
    </div>
  );
};

export default RatingBar;
