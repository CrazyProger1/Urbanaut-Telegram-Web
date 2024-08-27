import { AbandonedObject } from "../../types/objects.ts";
import { FC } from "react";
import ObjectItem from "../items/ObjectItem.tsx";

interface ObjectsTableProps {
  objects: AbandonedObject[];
}

const ObjectsTable: FC<ObjectsTableProps> = ({ objects }) => {
  return (
    <div>
      {objects.map((obj) => (
        <ObjectItem key={obj.name} obj={obj} />
      ))}
    </div>
  );
};

export default ObjectsTable;
