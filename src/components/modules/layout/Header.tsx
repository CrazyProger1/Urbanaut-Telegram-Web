"use client";

import React from "react";
import { Link } from "@/i18n/routing";
import { PAGES } from "@/config/pages";
import SettingsButton from "./SettingsButton";
import useAccountStore from "@/stores/accounts";
import { UserAvatar } from "@/components/modules/users";

const Header = () => {
  const { user } = useAccountStore();

  return (
    <div className="bg-foreground shadow-volume p-2 mx-4 rounded-b-2xl flex flex-row items-center">
      <Link href={PAGES.PROFILE}>
        <UserAvatar user={user} />
      </Link>

      <div className="pl-2">
        <h1 className="text-lg font-bold font-primary">
          @{user?.nickname || user?.username || "username"}
        </h1>
        <Link href={PAGES.LEADERBOARD}>
          <p className="text-text font-primary text-sm">
            {user?.rank.name || "newbie"}
          </p>
        </Link>
      </div>
      <SettingsButton />
    </div>
  );
};

export default Header;
