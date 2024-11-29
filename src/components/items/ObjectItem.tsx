import React from "react";
import { STUBS } from "@/constants/media";

const ObjectItem = () => {
  return (
    <div className="bg-secondary flex flex-row rounded-2xl mt-4 p-4">
      <img
        src={STUBS.object}
        alt="object-image"
        className="size-28 rounded-2xl"
      />
      <div className="flex flex-col ml-4">
        <div className="text-text  font-bold font-primary">Name</div>
        <div className="text-text font-primary">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </div>
      </div>
    </div>
  );
};

export default ObjectItem;
