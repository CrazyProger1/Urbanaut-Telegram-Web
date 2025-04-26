import React from "react";
import { ALTS, ICONS } from "@/config/media";
import Image from "next/image";

const TelegramIcon = () => {
  return (
    <Image
      className="size-9 aspect-square drop-shadow-volume"
      src={ICONS.TELEGRAM}
      height={64}
      width={64}
      alt={ALTS.TELEGRAM_ICON}
    />
  );
};

export default TelegramIcon;
