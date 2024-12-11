import React from "react";
import { ObjectItem } from "@/components/items";
import { AbandonedObject } from "@/types/objects";

interface Props {
  objects: AbandonedObject[];
}

const ObjectTable = ({ objects }: Props) => {
  return (
    <>
      {objects.map((obj) => (
        <ObjectItem key={obj.id} object={obj} />
      ))}
    </>
  );
};

export default ObjectTable;
