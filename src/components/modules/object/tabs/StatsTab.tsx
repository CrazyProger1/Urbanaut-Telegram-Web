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
      <div className="flex flex-col bg-foreground w-full p-4 rounded-2xl">
        <div className="font-bold text-xl text-center">Dates</div>
        <div className="mt-2" />
        <p>
          <div className="font-bold">Created at:</div>
          {formatDate(created_at)}
        </p>
        <p>
          <div className="font-bold">Abandoned at:</div>
          {formatDate(abandoned_at)}
        </p>
        <p>
          <div className="font-bold">Abandoned at:</div>
          {formatDate(built_at)}
        </p>
      </div>
      <div className="mt-4" />
      <div className="flex flex-col bg-foreground w-full p-4 rounded-2xl">
        <div className="font-bold text-xl text-center">State</div>
        <div className="mt-2" />
        <p>
          <div className="font-bold">Preservation level:</div>
          {preservation_level}
        </p>
        <p>
          <div className="font-bold">Security level:</div>
          {security_level}
        </p>
        <p>
          <div className="font-bold">Difficulty at:</div>
          {difficulty_level}
        </p>
      </div>
      <div className="mt-4" />
      <RatingBar stars={3} />
    </div>
  );
};

export default StatsTab;
