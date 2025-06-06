import React from "react";
import { AbandonedObject } from "@/types/abandoned";
import { Block } from "@/components/common/blocks";
import Image from "next/image";
import { ALTS, STUBS } from "@/config/media";
import { Link } from "@/i18n/routing";
import { PAGES } from "@/config/pages";
import { RatingBar } from "@/components/common/bars";
import clsx from "clsx";
import { Badge } from "@/components/common/badges";

interface Props {
  object?: AbandonedObject;
}

const ObjectItem = ({ object }: Props) => {
  if (!object) return null;
  const imageClassName = clsx(
    "aspect-square size-32 rounded-2xl",
    object.difficulty_level === "NEWBIE" && "shadow-difficulty-newbie",
    object.difficulty_level === "EASY" && "shadow-difficulty-easy",
    object.difficulty_level === "HARD" && "shadow-difficulty-hard",
    object.difficulty_level === "MEDIUM" && "shadow-difficulty-medium",
  );
  return (
    <Link href={PAGES.OBJECT.replace(":id", String(object.id))}>
      <Block className="flex flex-row p-2" blockClassName="active:bg-selection">
        <Image
          className={imageClassName}
          width={128}
          height={128}
          src={object.photo || STUBS.OBJECT}
          alt={ALTS.OBJECT_PHOTO}
        />
        <div className="ml-2 flex flex-col font-primary justify-between">
          <div>
            <div className="text-md font-bold">{object.name}</div>
            <div className="text-sm mt-1">{object.short_description}</div>
          </div>

          <div className="flex flex-wrap gap-1">
            {object.categories
              ?.slice(0, 2)
              .map((category) => (
                <Badge key={category.id} text={category.name} />
              ))}
          </div>

          <RatingBar value={Number(object.rating?.value || 0)} />
        </div>
      </Block>
    </Link>
  );
};

export default ObjectItem;
