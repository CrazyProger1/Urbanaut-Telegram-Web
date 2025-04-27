import React from "react";
import { ALTS, ICONS } from "@/config/media";
import Image from "next/image";
import clsx from "clsx";

interface Props {
  className?: string;
}

const ShareIcon = ({ className }: Props) => {
  const combinedClassName = clsx(
    "size-9 aspect-square drop-shadow-volume",
    className,
  );
  return (
    <Image
      className={combinedClassName}
      src={ICONS.SHARE}
      height={64}
      width={64}
      alt={ALTS.SHARE_ICON}
    />
  );
};

export default ShareIcon;
