import React from "react";
import { ALTS, ICONS } from "@/config/media";
import Image from "next/image";

const ShareIcon = () => {
  return (
    <Image
      className="size-9 aspect-square drop-shadow-volume"
      src={ICONS.SHARE}
      height={64}
      width={64}
      alt={ALTS.SHARE_ICON}
    />
  );
};

export default ShareIcon;
