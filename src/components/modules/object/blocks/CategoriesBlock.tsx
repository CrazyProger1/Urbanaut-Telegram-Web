"use client";

import React from "react";
import { HorizontalMasonry } from "simple-masonry-ui";
import { LINKS } from "@/constants/nav";
import { CategoryBadge } from "@/components/modules/badges";
import { Block } from "@/components/common/blocks";
import { AbandonedObject } from "@/types/objects";
import { Link } from "@/i18n/routing";

interface Props {
  object: AbandonedObject;
}

const CategoriesBlock = ({ object }: Props) => (
  <>
    {object.categories && (
      <Block name="Categories">
        <HorizontalMasonry gap={1} extendClassName="gap-1">
          {object.categories.map((category) => (
            <Link
              key={category.id}
              href={`${LINKS.objects}?category=${category.name}`}
            >
              <CategoryBadge category={category} active={true} />
            </Link>
          ))}
        </HorizontalMasonry>
      </Block>
    )}
  </>
);
export default CategoriesBlock;
