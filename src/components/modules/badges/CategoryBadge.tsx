import React from "react";
import { AbandonedObjectCategory } from "@/types/categories";

interface Props {
  category: AbandonedObjectCategory;
  variant: "active" | "inactive";
  onClick?: () => void;
}

const CategoryBadge = ({ category, variant, onClick }: Props) => {
  const { name } = category;
  return (
    <div
      className={
        "bg-foreground text-text text-center text-xs font-medium p-1 rounded grid-item " +
        (variant === "active" ? "bg-selection" : "")
      }
      onClick={onClick}
    >
      {name}
    </div>
  );
};
export default CategoryBadge;
