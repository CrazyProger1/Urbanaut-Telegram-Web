import { FC } from "react";
import { AbandonedObject } from "../../types/objects.ts";

interface ObjectItemProps {
  obj: AbandonedObject;
}

const ObjectItem: FC<ObjectItemProps> = ({ obj }) => {
  return <div>{obj.photo}</div>;
};

export default ObjectItem;
