import { TObject } from "@/types/objects";
import ObjectItem from "@/components/items/ObjectItem";
import React from "react";

interface IObjectsTableProps {
  objects: TObject[];
}

const ObjectsTable: React.FC<IObjectsTableProps> = ({ objects }) => {
  return (
    <div>
      {objects.map((obj: TObject) => (
        <ObjectItem key={obj.id} object={obj} />
      ))}
    </div>
  );
};

export default ObjectsTable;
