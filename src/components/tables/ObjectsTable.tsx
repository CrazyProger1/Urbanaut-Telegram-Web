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
        <div className="m-4">
          <ObjectItem key={obj.name} obj={obj} />
        </div>
      ))}
    </div>
  );
};

export default ObjectsTable;
