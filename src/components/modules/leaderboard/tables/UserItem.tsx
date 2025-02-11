import React from "react";
import { User } from "@/types/users";
import { STUBS } from "@/constants/media";
import { LINKS } from "@/constants/nav";
import clsx from "clsx";
import { Link } from "@/i18n/routing";

interface Props {
  user: User;
}

const UserItem = ({ user }: Props) => {
  const { rank, username } = user;

  const imageClassName = clsx(
    "size-16 rounded-2xl",
    rank === "NEWBIE" && "shadow-rank-frame-newbie",
    rank === "STALKER" && "shadow-rank-frame-stalker",
    rank === "LEGEND" && "shadow-rank-frame-legend",
  );
  return (
    <div className="bg-foreground rounded-2xl p-2 pr-4 flex flex-row items-center shadow-volume-frame">
      <Link href={LINKS.user.replace("[id]", user.id.toString())}>
        <img className={imageClassName} src={STUBS.user} alt="user-photo" />
      </Link>

      <div className="pl-2 text-text font-primary">
        <p className="text-lg">@{username}</p>
        <p className="text-text font-primary text-sm">{rank.toLowerCase()}</p>
      </div>
    </div>
  );
};

export default UserItem;
