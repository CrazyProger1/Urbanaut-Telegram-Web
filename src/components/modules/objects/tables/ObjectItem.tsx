import React from "react";
import { STUBS } from "@/constants/media";
import { LINKS } from "@/constants/nav";
import { AbandonedObject } from "@/types/objects";
import Link from "next/link";
import { RatingBar } from "../../../common/bars/ratings";
import Image from "next/image";

export const DIFFICULTY_FRAME = {
  DEFAULT: "shadow-difficulty-frame-newbie",
  NEWBIE: "shadow-difficulty-frame-newbie",
  EASY: "shadow-difficulty-frame-easy",
  MEDIUM: "shadow-difficulty-frame-medium",
  HARD: "shadow-difficulty-frame-hard",
};

interface Props {
  object: AbandonedObject;
}

const ObjectItem = ({ object }: Props) => {
  const { id, name, short_description, photo, difficulty_level, rating } =
    object;
  const frameClass =
    DIFFICULTY_FRAME[difficulty_level as keyof typeof DIFFICULTY_FRAME];

  return (
    <Link
      className="bg-foreground flex flex-row rounded-2xl p-4 shadow-volume-frame"
      href={LINKS.objects + `/${id}`}
      draggable={false}
    >
      <div className="size-28 relative">
        <Image
          src={photo || STUBS.object}
          alt="object-image"
          className={`rounded-2xl object-cover ${frameClass}`}
          fill={true}
          placeholder="blur"
        />
      </div>

      <div className="flex flex-col ml-4 font-primary text-text">
        <div className="font-bold">{name}</div>
        <div>{short_description}</div>
        <div className="mt-auto mb-2">
          <RatingBar stars={rating || 5} />
        </div>
      </div>
    </Link>
  );
};

export default ObjectItem;
