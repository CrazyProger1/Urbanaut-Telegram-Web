import React from "react";
import { STUBS } from "@/constants/media";

const AvatarSection = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <img
        src={STUBS.user}
        alt=""
        className="size-52 shadow-rank-frame-legend rounded-2xl"
      />
    </div>
  );
};

export default AvatarSection;
