import React from "react";
import { AbandonedObject } from "@/types/objects";
import { RatingBar } from "@/components/common/bars/ratings";
import { formatDate } from "@/utils/date";
import Link from "next/link";
import { LINKS } from "@/constants/nav";
import { CategoryBadge } from "@/components/modules/badges";
import { HorizontalMasonry } from "simple-masonry-ui";
import { Block } from "@/components/common/blocks";

interface Props {
  object: AbandonedObject;
}

interface RowProps {
  name: string;
  value: string;
}

const Row = ({ name, value }: RowProps) => (
  <div className="flex flex-row">
    <div className="font-bold">{name}:</div>
    <div className="pl-1 cursor-pointer">{value}</div>
  </div>
);

const StatsTab = ({ object }: Props) => {
  const {
    created_at,
    abandoned_at,
    built_at,
    preservation_level,
    security_level,
    difficulty_level,
    categories,
  } = object;
  return (
    <div className="flex flex-col font-primary text-text">
      <Block name="Dates">
        <Row name="Created at" value={formatDate(created_at)} />
        <Row name="Abandoned at" value={formatDate(abandoned_at)} />
        <Row name="Built at" value={formatDate(built_at)} />
      </Block>
      <div className="mt-4" />
      <Block name="Status">
        <Row name="Preservation level" value={preservation_level} />
        <Row name="Security level" value={security_level} />
        <Row name="Difficulty level" value={difficulty_level} />
      </Block>
      <div className="mt-4" />
      <Block name="Statistics">
        <Row name="Reports" value="0" />
        <Row name="Visits" value="0" />
      </Block>
      <div className="mt-4" />
      <Block name="Rating">
        <RatingBar stars={5} size="lg" />
      </Block>
      <div className="mt-4" />

      {categories && (
        <Block name="Categories">
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
        </Block>
      )}
    </div>
  );
};

export default StatsTab;
