import React from "react";
import StarIcon from "../../icons/StarIcon";
import { Rating } from "@/types/common";
import clsx from "clsx";

interface Props {
  stars: Rating;
  size?: "sm" | "md" | "lg";
}

const RatingBar = ({ stars, size = "sm" }: Props) => {
  const starClassName = clsx(
    size === "sm" && "size-4",
    size === "md" && "size-6",
    size === "lg" && "size-8",
  );

  const className = clsx(
    "flex flex-row items-center",
    size === "sm" && "gap-2",
    size === "md" && "gap-3",
    size === "lg" && "gap-4",
  );
  return (
    <div className={className}>
      {Array.from({ length: stars }, (_, i) => (
        <div key={i} className={starClassName}>
          <StarIcon color="#FFBE00" />
        </div>
      ))}
    </div>
  );
};

export default RatingBar;
