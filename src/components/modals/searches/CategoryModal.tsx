"use client";
import React, { useState } from "react";
import { HorizontalMasonry } from "simple-masonry-ui";

const CategoryBadge = ({ text }: { text: string }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={
        "bg-foreground text-text text-center text-xs font-medium p-1 rounded grid-item " +
        (isActive ? "bg-selection" : "")
      }
      onClick={(ev) => {
        setIsActive(!isActive);
        ev.stopPropagation();
      }}
    >
      {text}
    </div>
  );
};

// interface Props {
//   categories: string[];
//   chosen: string[];
//   onChange: (chosen: string[]) => void;
// }

const CategoryModal = () => {
  return (
    <div
      className="flex flex-col w-2/4 bg-background shadow-volume-frame pt-2 pb-4 px-4 rounded-2xl select-none"
      onClick={(ev) => ev.stopPropagation()}
    >
      <label className="text-text text-lg font-primary text-center font-bold">
        Category
      </label>
      <div className="mt-2" />
      <HorizontalMasonry className=" flex flex-wrap gap-0.5 " gap={0.5}>
        <CategoryBadge text="Long Long Long Category" />
        <CategoryBadge text="Short Category" />
        <CategoryBadge text="Category" />
        <CategoryBadge text="Test" />
        <CategoryBadge text="Short" />
        <CategoryBadge text="A" />
        <CategoryBadge text="B" />
        <CategoryBadge text="C" />
        <CategoryBadge text="ABC" />
        <CategoryBadge text="More" />
        <CategoryBadge text="More More" />
      </HorizontalMasonry>
    </div>
  );
};

export default CategoryModal;
