import { FC } from "react";
import { AbandonedObject } from "../../types/objects.ts";
import { DEFAULT_IMAGES } from "../../constants/images.ts";

interface ObjectItemProps {
  obj: AbandonedObject;
}

const ObjectItem: FC<ObjectItemProps> = ({ obj }) => {
  return (
    <div className="p-4 bg-foreground rounded-2xl flex flex-row">
      <div className="min-w-fit">
        <img
          className="rounded-2xl size-32 shadow-shadow-first/50 shadow-frame"
          src={obj.photo || DEFAULT_IMAGES.object}
          alt="image-object"
        />
      </div>
      <div className="ml-4">
        <p className="text-text text-lg">{obj.name}</p>
        <p className="text-text text-sm">{obj.description}</p>
      </div>
    </div>
  );
};

export default ObjectItem;
