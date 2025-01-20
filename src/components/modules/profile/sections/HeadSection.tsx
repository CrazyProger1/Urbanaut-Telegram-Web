import React from "react";
import { ICONS } from "@/constants/media";

const HeadSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex-1" />
      <img src={ICONS.bell} alt="" className="size-8" />
      <div className="font-primary font-bold text-text text-xl">@username</div>
    </div>
  );
};

export default HeadSection;
