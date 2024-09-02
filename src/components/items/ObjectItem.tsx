import { FC } from "react";
import { AbandonedObject } from "../../types/objects.ts";
import SmallRatingBar from "../bars/SmallRatingBar.tsx";

interface ObjectItemProps {
  obj: AbandonedObject;
}

const ObjectItem: FC<ObjectItemProps> = ({ obj }) => {
  return <div></div>;
};

export default ObjectItem;
