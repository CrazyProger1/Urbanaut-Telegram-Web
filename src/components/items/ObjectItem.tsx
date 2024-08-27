import { FC } from "react";
import { AbandonedObject } from "../../types/objects.ts";

interface ObjectItemProps {
  obj: AbandonedObject;
}

const ObjectItem: FC<ObjectItemProps> = ({ obj }) => {
  return (
    <div className="bg-card rounded-2xl p-4 flex flex-row">
      <img src={obj.photo} alt="" className="rounded-2xl size-1/3" />
      <div className="flex flex-col ml-4">
        <p className="text-copy-primary text-lg">{obj.name}</p>
        <p className="text-copy-primary text-sm">{obj.description}</p>
      </div>
    </div>
  );
};

export default ObjectItem;
