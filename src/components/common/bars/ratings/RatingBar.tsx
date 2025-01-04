import React from "react";
import StarIcon from "../../icons/StarIcon";

interface Props {
  stars: 1 | 2 | 3 | 4 | 5;
}

const RatingBar = ({ stars }: Props) => (
  <div className="flex flex-row items-center">
    {Array.from({ length: stars }, (_, i) => (
      <StarIcon key={i} color="#FFBE00" />
    ))}
  </div>
);
export default RatingBar;
