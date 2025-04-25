import React from "react";
import Image from "next/image";
import { ALTS, ICONS } from "@/config/media";
interface Props {
  dot?: boolean;
  size?: "sm" | "md";
}
const NotificationIcon = ({ dot, size = "sm" }: Props) => {
  const px = size === "sm" ? 32 : 38;
  return (
    <div className="relative">
      <Image
        className="drop-shadow-volume"
        width={px}
        height={px}
        src={ICONS.BELL}
        alt={ALTS.NOTIFICATION_ICON}
      />
      {dot ? (
        <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 drop-shadow-volume" />
      ) : null}
    </div>
  );
};

export default NotificationIcon;
