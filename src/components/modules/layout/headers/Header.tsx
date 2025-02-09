import { Link } from "@/i18n/routing";
import { STUBS } from "@/constants/media";
import { LINKS } from "@/constants/nav";

import { SettingsButton } from "@/components/common/contols/buttons";
import { Suspense } from "react";
import clsx from "clsx";
import { Rank } from "@/types/common";
import { getInitDataCookie } from "@/telegram/utils/server";

const Header = async () => {
  const { initData } = await getInitDataCookie();
  const rank: Rank = "LEGEND" as Rank;
  const imageClassName = clsx(
    "size-16 rounded-2xl",
    rank === "NEWBIE" && "shadow-rank-frame-newbie",
    rank === "STALKER" && "shadow-rank-frame-stalker",
    rank === "LEGEND" && "shadow-rank-frame-legend",
  );
  return (
    <div className="sticky top-0 z-10 bg-foreground rounded-b-2xl p-2 pr-4 flex flex-row items-center shadow-volume-frame">
      <Link href={LINKS.profile}>
        <img
          className={imageClassName}
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
