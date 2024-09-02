import { AbandonedObject } from "../../types/objects.ts";
import { FC } from "react";
import ObjectItem from "../items/ObjectItem.tsx";

interface ObjectsTableProps {
  objects: AbandonedObject[];
}

const ObjectsTable: FC<ObjectsTableProps> = ({ objects }) => {
  return (
    <div></div>
  );
};

export default ObjectsTable;
