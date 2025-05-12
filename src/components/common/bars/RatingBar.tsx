import React from "react";
import { StarIcon } from "@/components/common/icons";

interface Props {
  value?: number;
  size?: "sm" | "md" | "lg";
}
const RatingBar = ({ value = 0, size = "sm" }: Props) => {
  value = Math.round(value);
  const rating: boolean[] = Array(value).fill(true);
  rating.push(...Array(5 - value).fill(false));
  return (
    <div className="flex flex-row items-center">
      {rating.map((fill, index) => (
        <StarIcon key={index} fill={fill} size={size} />
      ))}
    </div>
  );
};

export default RatingBar;
