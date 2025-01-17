import React from "react";
import { AbandonedObjectCategory } from "@/types/categories";
import clsx from "clsx";

interface Props {
  category: AbandonedObjectCategory;
  active: boolean;
  onClick?: () => void;
}

const CategoryBadge = ({ category, active, onClick }: Props) => {
  const { name } = category;

  const className = clsx(
    "bg-foreground text-text text-center text-md font-medium p-1 rounded grid-item cursor-pointer",
    active && "bg-selection",
  );
  return (
    <div className={className} onClick={onClick}>
      {name}
    </div>
  );
};
export default CategoryBadge;
