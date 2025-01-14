import React from "react";
import { User } from "@/types/users";
import { STUBS } from "@/constants/media";
import { LINKS } from "@/constants/nav";
import Link from "next/link";

interface Props {
  user: User;
}

const RANK_FRAME = {
  DEFAULT: "shadow-rank-frame-newbie",
  NEWBIE: "shadow-rank-frame-newbie",
  STALKER: "shadow-rank-frame-stalker",
  LEGEND: "shadow-rank-frame-legend",
};
const UserItem = ({ user }: Props) => {
  const { rank, username } = user;
  return (
    <div className="bg-foreground rounded-2xl p-2 pr-4 flex flex-row items-center shadow-volume-frame">
      <Link href={LINKS.profile}>
        <img
          className={`size-16 rounded-2xl ${RANK_FRAME[rank]}}`}
          src={STUBS.user}
          alt="user-photo"
        />
      </Link>

      <div className="pl-2 text-text font-primary">
        <p className="text-lg">@{username}</p>
        <p className="text-text font-primary text-sm">newbie</p>
      </div>
    </div>
  );
};

export default UserItem;
