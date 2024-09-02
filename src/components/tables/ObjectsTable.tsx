import { AbandonedObject } from "../../types/objects.ts";
import { FC } from "react";

interface ObjectsTableProps {
  objects: AbandonedObject[];
}

const ObjectsTable: FC<ObjectsTableProps> = ({ objects }) => {
  return (
    <div>{objects[0].name}</div>
  );
};

export default ObjectsTable;
