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
  );
};

export default ConcludeSection;
