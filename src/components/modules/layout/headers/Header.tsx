"use client";

import Link from "next/link";

import { STUBS } from "@/constants/media";
import { LINKS } from "@/constants/nav";

import { SettingsButton } from "@/components/common/contols/buttons";
import { Suspense } from "react";
import { useAccountStore } from "@/stores";

const RANK_FRAME = {
  DEFAULT: "shadow-rank-frame-newbie",
  NEWBIE: "shadow-rank-frame-newbie",
  STALKER: "shadow-rank-frame-stalker",
  LEGEND: "shadow-rank-frame-legend",
};
const Header = () => {
  const { initData } = useAccountStore();

  return (
    <div className="sticky top-0 z-10 bg-foreground rounded-b-2xl p-2 pr-4 flex flex-row items-center shadow-volume-frame">
      <Link href={LINKS.profile}>
        <img
          className={`size-16 rounded-2xl ${RANK_FRAME.LEGEND}`}
          src={initData?.user?.photoUrl || STUBS.user}
          alt="user-photo"
        />
      </Link>

      <div className="pl-2 text-text font-primary">
        <p className="text-lg">@{initData?.user?.username}</p>
        <Link href={LINKS.leaderboard}>
          <p className="text-text font-primary text-sm">newbie</p>
        </Link>
      </div>
      <Suspense>
        <SettingsButton />
      </Suspense>
    </div>
  );
};

export default Header;
