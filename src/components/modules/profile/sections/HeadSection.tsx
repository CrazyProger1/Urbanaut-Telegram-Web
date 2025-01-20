import React from "react";
import { ICONS } from "@/constants/media";

const HeadSection = () => {
  return (
    <div className="flex flex-row">
      <div className="flex-1" />
      <img src={ICONS.bell} alt="" className="size-8" />
    </div>
  );
};

export default HeadSection;
