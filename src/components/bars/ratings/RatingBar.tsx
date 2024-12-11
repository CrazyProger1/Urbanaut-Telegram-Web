import React from "react";
import RatingStar from "./RatingStar";

interface Props {
  stars: 1 | 2 | 3 | 4 | 5;
}

const RatingBar = ({ stars }: Props) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: stars }, (_, i) => (
        <RatingStar key={i} />
      ))}
    </div>
  );
};

export default RatingBar;
