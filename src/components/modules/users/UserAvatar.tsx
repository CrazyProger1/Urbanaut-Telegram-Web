import React from "react";
import { ALTS, STUBS } from "@/config/media";
import Image from "next/image";
import clsx from "clsx";
import { SessionUser, User } from "@/types/users";

interface Props {
  user?: SessionUser | User;
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
    user?.rank.key === "NEWBIE" && "shadow-rank-newbie",
    user?.rank.key === "STALKER" && "shadow-rank-stalker",
    user?.rank.key === "LEGEND" && "shadow-rank-legend",
    user?.rank.key === "PROFESSIONAL" && "shadow-rank-professional",
  );
  let avatarSrc = STUBS.USER;

  if (user && user?.avatar) {
    avatarSrc = user.avatar;
  } else if (user && "photo_url" in user && user.photo_url) {
    avatarSrc = user.photo_url;
  }

  return (
    <Image
      width={128}
      height={128}
      className={imageClassName}
      src={avatarSrc}
      alt={ALTS.USER_AVATAR}
    />
  );
};

export default UserAvatar;
