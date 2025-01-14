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
  return (
    <div className="flex flex-row items-center">
      <Link href={LINKS.profile}>
        <img
          className={`size-16 rounded-2xl ${RANK_FRAME.NEWBIE}`}
          src={STUBS.user}
          alt="user-photo"
        />
      </Link>

      <div className="pl-2 text-text font-primary">
        <p className="text-lg">@{user.username}</p>
        <p className="text-text font-primary text-sm">newbie</p>
      </div>
    </div>
  );
};

export default UserItem;
