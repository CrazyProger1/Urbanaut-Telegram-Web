"use client";
import React from "react";

import { AbandonedObject } from "@/types/objects";
import { CategoryBadge } from "@/components/modules/badges";
import { HorizontalMasonry } from "simple-masonry-ui";

interface Props {
  object: AbandonedObject;
}

const ConcludeSection = ({ object }: Props) => {
  const { categories } = object;

  if (!categories) {
    return <div />;
  }
  return (
    <HorizontalMasonry gap={1} extendClassName="gap-1">
      {categories.map((category) => (
        <CategoryBadge
          key={category.id}
          category={category}
          variant="inactive"
        />
      ))}
    </HorizontalMasonry>
  );
};

export default ConcludeSection;
