import React from "react";
import { STUBS } from "@/constants/media";

const ObjectItem = () => {
  return (
    <div className="bg-secondary flex flex-row rounded-2xl mt-4 p-4">
      <img
        src={STUBS.object}
        alt="object-image"
        className="size-20 rounded-2xl"
      />
      <div className="flex flex-col ml-4">
        <div className="text-text  font-bold font-primary">Name</div>
        <div className="text-text font-primary">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took.
        </div>
      </div>
    </div>
  );
};

export default ObjectItem;
