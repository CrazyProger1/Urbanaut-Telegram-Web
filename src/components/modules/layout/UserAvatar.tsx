import React from "react";
import { ALTS, STUBS } from "@/config/media";
import Image from "next/image";
import clsx from "clsx";
import { SessionUser } from "@/types/users";

interface Props {
  user?: SessionUser;
}

const UserAvatar = ({ user }: Props) => {
  const imageClassName = clsx(
    "size-16 rounded-2xl",
    user?.rank === "NEWBIE" && "shadow-rank-newbie",
    user?.rank === "STALKER" && "shadow-rank-stalker",
    user?.rank === "LEGEND" && "shadow-rank-legend",
    user?.rank === "PROFESSIONAL" && "shadow-rank-professional",
  );

  return (
    <Image
      width={64}
      height={64}
      className={imageClassName}
      src={user?.avatar || user?.photo_url || STUBS.USER}
      alt={ALTS.USER_AVATAR}
    />
  );
};

export default UserAvatar;
