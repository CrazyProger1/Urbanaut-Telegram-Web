import React from "react";
import ObjectItem from "./ObjectItem";
import { AbandonedObject } from "@/types/objects";

interface Props {
  objects: AbandonedObject[];
}

const ObjectTable = ({ objects }: Props) => {
  return (
    <div className="gap-4 flex flex-col">
      {objects.map((obj) => (
        <ObjectItem key={obj.id} object={obj} />
      ))}
    </div>
  );
};

export default ObjectTable;
