"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { HorizontalMasonry } from "simple-masonry-ui";
import { ModalPortal } from "@/components/modals";
import { AbandonedObjectCategory } from "@/types/categories";

interface CategoryBadgeProps {
  category: AbandonedObjectCategory;
  variant: "active" | "inactive";
  onClick?: () => void;
}

const CategoryBadge = ({ category, variant, onClick }: CategoryBadgeProps) => {
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

interface Props {
  show: boolean;
  categories: AbandonedObjectCategory[];
  onClose: (categories: string[]) => void;
}

const CategoryModal = ({ show, categories, onClose }: Props) => {
  const [visibleCategories, setVisibleCategories] = useState(categories);
  const [activeCategories, setActiveCategories] = useState<
    AbandonedObjectCategory[]
  >([]);

  const toggleCategory = (category: AbandonedObjectCategory) => {
    const isActive = activeCategories.includes(category);

    const newActiveCategories = isActive
      ? activeCategories.filter((cat) => cat !== category)
      : [...activeCategories, category];
    const newVisibleCategories = categories;


    setActiveCategories(newActiveCategories);
    setVisibleCategories(newVisibleCategories);
  };

  return (
    <ModalPortal show={show} onClose={() => onClose && onClose([])}>
      <div
        className="flex flex-col w-2/4 bg-background shadow-volume-frame pt-2 pb-4 px-4 rounded-2xl select-none"
        onClick={(ev) => ev.stopPropagation()}
      >
        <label className="text-text text-lg font-primary text-center font-bold">
          Category
        </label>

        <div className="mt-2" />
        <HorizontalMasonry gap={0.5}>
          {visibleCategories.map((category) => (
            <CategoryBadge
              key={category.id}
              category={category}
              variant={
                activeCategories.includes(category) ? "active" : "inactive"
              }
              onClick={() => toggleCategory(category)}
            />
          ))}
        </HorizontalMasonry>
      </div>
    </ModalPortal>
  );
};

export default CategoryModal;
