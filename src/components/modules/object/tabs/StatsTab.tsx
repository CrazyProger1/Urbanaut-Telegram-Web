import React from "react";
import { AbandonedObject } from "@/types/objects";
import { RatingBar } from "@/components/common/bars/ratings";
import { formatDate } from "@/utils/date";

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
  } = object;
  return (
    <div className="flex flex-col font-primary text-text">
      <div className="flex flex-col bg-foreground w-full p-4 rounded-2xl">
        <div className="font-bold text-xl text-center">Dates</div>
        <div className="mt-2" />
        <Row name="Created at" value={formatDate(created_at)} />
        <Row name="Abandoned at" value={formatDate(abandoned_at)} />
        <Row name="Built at" value={formatDate(built_at)} />
      </div>
      <div className="mt-4" />
      <div className="flex flex-col bg-foreground w-full p-4 rounded-2xl">
        <div className="font-bold text-xl text-center">State</div>
        <div className="mt-2" />
        <Row name="Preservation level" value={preservation_level} />
        <Row name="Security level" value={security_level} />
        <Row name="Difficulty level" value={difficulty_level} />
      </div>
      <div className="mt-4" />
      <RatingBar stars={3} size="lg" />
    </div>
  );
};

export default StatsTab;
