import React from "react";
import { AbandonedObject } from "@/types/abandoned";
import ObjectItem from "./ObjectItem";

interface Props {
  objects: AbandonedObject[];
}
const ObjectsTable = ({ objects }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {objects.map((obj) => (
        <ObjectItem key={obj.id} object={obj} />
      ))}
    </div>
  );
};

export default ObjectsTable;
