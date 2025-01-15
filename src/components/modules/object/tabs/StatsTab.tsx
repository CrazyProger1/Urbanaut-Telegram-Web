import React from "react";
import { AbandonedObject } from "@/types/objects";

interface Props {
  object: AbandonedObject;
}

const StatsTab = ({ object }: Props) => {
  return <div>{object.name}</div>;
};

export default StatsTab;
