import React from "react";
import { AbandonedObject } from "@/types/objects";
import { RatingBar } from "@/components/common/bars/ratings";
import { formatDate } from "@/utils/date";

interface Props {
  object: AbandonedObject;
}

const StatsTab = ({ object }: Props) => {
  const {
    created_at,
    abandoned_at,
    built_at,
    preservation_level,
    security_level,
    difficulty_level,
  } = object;
  return (
    <div className="flex flex-col font-primary text-text">
      <div className="flex flex-col bg-foreground w-full p-4">
        <div className="font-bold text-xl">Dates</div>
        <p>Created at: {formatDate(created_at)}</p>
        <p>Abandoned at: {formatDate(abandoned_at)}</p>
        <p>Abandoned at: {formatDate(built_at)}</p>
      </div>
      <div className="mt-4" />
      <div className="flex flex-col bg-foreground w-full p-4">
        <div className="font-bold text-xl">State</div>
        <p>Preservation level: {preservation_level}</p>
        <p>Security level: {security_level}</p>
        <p>Difficulty at: {difficulty_level}</p>
      </div>
      <div className="mt-4" />
      <RatingBar stars={3} />
    </div>
  );
};

export default StatsTab;
