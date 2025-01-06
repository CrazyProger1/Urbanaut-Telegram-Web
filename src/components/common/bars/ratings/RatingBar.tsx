import React from "react";
import StarIcon from "../../icons/StarIcon";
import { Rating } from "@/types/common";

interface Props {
  stars: Rating;
}

const RatingBar = ({ stars }: Props) => (
  <div className="flex flex-row items-center">
    {Array.from({ length: stars }, (_, i) => (
      <StarIcon key={i} color="#FFBE00" />
    ))}
  </div>
);
export default RatingBar;
