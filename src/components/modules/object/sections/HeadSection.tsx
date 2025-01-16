import React from "react";
import { AbandonedObject } from "@/types/objects";

interface Props {
  object: AbandonedObject;
}

const HeadSection = ({ object }: Props) => {
  return (
    <div className="text-center text-text font-primary font-bold text-2xl">
      {object.name}
    </div>
  );
};

export default HeadSection;
