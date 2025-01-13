"use client";

import Link from "next/link";

import { STUBS } from "@/constants/media";
import { LINKS } from "@/constants/nav";

import { SettingsButton } from "@/components/common/contols/buttons";
import { Suspense } from "react";

const RANK_FRAME = {
  DEFAULT: "shadow-rank-frame-newbie",
  NEWBIE: "shadow-rank-frame-newbie",
  STALKER: "shadow-rank-frame-stalker",
  LEGEND: "shadow-rank-frame-legend",
};
const Header = () => {
  return (
    <div className="sticky top-0 z-10 bg-foreground rounded-b-2xl p-2 pr-4 flex flex-row items-center shadow-volume-frame">
      <Link href={LINKS.profile}>
        <img
          className={`size-16 rounded-2xl ${RANK_FRAME.LEGEND}`}
          src={STUBS.user}
          alt="user-photo"
        />
      </Link>

      <div className="pl-2 text-text font-primary">
        <p className="text-lg">@username</p>
        <p className="text-text font-primary text-sm">smth</p>
      </div>
      <Suspense>
        <SettingsButton />
      </Suspense>
    </div>
  );
};

export default Header;
