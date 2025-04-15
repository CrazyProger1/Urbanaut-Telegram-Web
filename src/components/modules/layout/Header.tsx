import React from "react";
import { Link } from "@/i18n/routing";
import { PAGES } from "@/config/pages";
import SettingsButton from "./SettingsButton";
import UserAvatar from "./UserAvatar";

const Header = () => {
  return (
    <div className="bg-foreground shadow-volume p-2 mx-4 rounded-b-2xl flex flex-row items-center">
      <Link href={PAGES.PROFILE}>
        <UserAvatar />
      </Link>

      <div className="pl-2 text-text font-primary">
        <p className="text-lg">@username</p>
        <Link href={PAGES.LEADERBOARD}>
          <p className="text-text font-primary text-sm">newbie</p>
        </Link>
      </div>
      <SettingsButton />
    </div>
  );
};

export default Header;
