import React from "react";
import { ICONS } from "@/constants/media";
import Image from "next/image";

const HeadSection = () => {
  return (
    <div className="flex flex-row">
      <div className="flex-1" />
      <Image src={ICONS.bell} alt="" className="size-8" width={8} height={8} />
    </div>
  );
};

export default HeadSection;
