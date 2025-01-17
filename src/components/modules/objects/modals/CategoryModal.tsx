"use client";
import React, { useState } from "react";
import { HorizontalMasonry } from "simple-masonry-ui";
import { ModalPortal } from "@/components/common/modals";
import { AbandonedObjectCategory } from "@/types/categories";
import { ModalTitle } from "@/components/common/typography/titles";
import { CategoryBadge } from "@/components/modules/badges";

interface Props {
  show: boolean;
  categories: AbandonedObjectCategory[];
  onClose: (categories: string[]) => void;
}

const CategoryModal = ({ show, categories, onClose }: Props) => {
  const [activeCategories, setActiveCategories] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleCategory = (category: AbandonedObjectCategory) => {
    const isActive = activeCategories[category.id];
    const key = category.id;
    setActiveCategories({ ...activeCategories, [key]: !isActive });
  };

  return (
    <ModalPortal show={show} onClose={() => onClose && onClose([])}>
      <div
        className="flex flex-col w-3/4 bg-background shadow-volume-frame pt-2 pb-4 px-4 rounded-2xl select-none"
        onClick={(ev) => ev.stopPropagation()}
      >
        <ModalTitle>Category</ModalTitle>

        <div className="mt-2" />
        <HorizontalMasonry dynamic={false} gap={1} extendClassName="gap-1">
          {categories.map((category) => (
            <CategoryBadge
              key={category.id}
              category={category}
              active={activeCategories[category.id]}
              onClick={() => toggleCategory(category)}
            />
          ))}
        </HorizontalMasonry>
      </div>
    </ModalPortal>
  );
};

export default CategoryModal;
