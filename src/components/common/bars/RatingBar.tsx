import React from "react";
import { StarIcon } from "@/components/common/icons";

interface Props {
  value?: number;
}
const RatingBar = ({ value = 0 }: Props) => {
  const rating: boolean[] = Array(value).fill(true);
  rating.push(...Array(5 - value).fill(false));
  return (
    <div className="flex flex-row items-center">
      {rating.map((fill, index) => (
        <StarIcon key={index} fill={fill} />
      ))}
    </div>
  );
};

export default RatingBar;
