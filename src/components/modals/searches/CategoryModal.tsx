"use client";
import React, { useEffect, useRef, useState } from "react";
import Masonry from "@/components/Masonry";

const CategoryBadge = ({ text }: { text: string }) => {
  const [active, setActive] = useState(false);
  return (
    <div
      className={
        "bg-foreground text-text text-center text-xs font-medium p-1 rounded grid-item " +
        (active ? "bg-selection" : "")
      }
      onClick={(ev) => {
        setActive(!active);
        ev.stopPropagation();
      }}
    >
      {text}
    </div>
  );
};
const CategoryModal = () => {
  return (
    <div className="flex flex-col w-2/4 bg-background shadow-volume-frame pt-2 pb-4 px-4 rounded-2xl">
      <label className="text-text text-lg font-primary text-center font-bold">
        Category
      </label>
      <div className="mt-2" />
      <Masonry>
        <CategoryBadge text="Faaactqwerty" />
        <CategoryBadge text="Cvvv" />
        <CategoryBadge text="Abcdabcd" />
        <CategoryBadge text="Testcat" />
        <CategoryBadge text="Somecat" />
        <CategoryBadge text="Ultrasuperpupercat" />
        <CategoryBadge text="Hmhmsomething" />
        <CategoryBadge text="Interesting" />
        <CategoryBadge text="Well" />
        <CategoryBadge text="See" />
        <CategoryBadge text="S" />
        <CategoryBadge text="CS" />
        <CategoryBadge text="Cat" />
        <CategoryBadge text="Category" />
      </Masonry>
    </div>
  );
};

export default CategoryModal;
