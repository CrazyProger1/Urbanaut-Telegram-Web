"use client";
import React from "react";

import { AbandonedObject } from "@/types/objects";
import { CategoryBadge } from "@/components/modules/badges";
import { HorizontalMasonry } from "simple-masonry-ui";
import Link from "next/link";
import { LINKS } from "@/constants/nav";

interface Props {
  object: AbandonedObject;
}

const ConcludeSection = ({ object }: Props) => {
  const { categories } = object;

  if (!categories) {
    return <div />;
  }
  return (
    <div className="p-4 bg-foreground rounded-2xl w-full">
      <div className="font-bold text-xl text-center text-text font-primary">
        Categories
      </div>
      <div className="mt-2" />
      <HorizontalMasonry gap={1} extendClassName="gap-1">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`${LINKS.objects}?category=${category.name}`}
          >
            <CategoryBadge category={category} active={true} />
          </Link>
        ))}
      </HorizontalMasonry>
    </div>
  );
};

export default ConcludeSection;
