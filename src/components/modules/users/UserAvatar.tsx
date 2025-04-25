import React from "react";
import { ALTS, STUBS } from "@/config/media";
import Image from "next/image";
import clsx from "clsx";
import { SessionUser } from "@/types/users";

interface Props {
  user?: SessionUser;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl";
}

const UserAvatar = ({ user, size = "sm" }: Props) => {
  const imageClassName = clsx(
    "rounded-2xl",
    size == "sm" && "size-16",
    size == "md" && "size-20",
    size == "lg" && "size-24",
    size == "xl" && "size-28",
    size == "2xl" && "size-32",
    size == "3xl" && "size-36",
    size == "4xl" && "size-40",
    size == "5xl" && "size-44",
    size == "6xl" && "size-48",
    user?.rank === "NEWBIE" && "shadow-rank-newbie",
    user?.rank === "STALKER" && "shadow-rank-stalker",
    user?.rank === "LEGEND" && "shadow-rank-legend",
    user?.rank === "PROFESSIONAL" && "shadow-rank-professional",
  );

  return (
    <Image
      width={128}
      height={128}
      className={imageClassName}
      src={user?.avatar || user?.photo_url || STUBS.USER}
      alt={ALTS.USER_AVATAR}
    />
  );
};

export default UserAvatar;
