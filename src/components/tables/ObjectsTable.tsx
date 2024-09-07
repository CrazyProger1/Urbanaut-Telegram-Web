import { AbandonedObject } from "../../types/objects.ts";
import { FC } from "react";
import ObjectItem from "../items/ObjectItem.tsx";

interface ObjectsTableProps {
  objects: AbandonedObject[];
  onChoose?: (obj: AbandonedObject) => void;
}

const ObjectsTable: FC<ObjectsTableProps> = ({ objects, onChoose }) => {
  return (
    <div>
      {objects.map((obj) => (
        <div className="mt-4">
          <ObjectItem obj={obj} onChoose={onChoose} />
        </div>
      ))}
    </div>
  );
};

export default ObjectsTable;
