"use client";
import React from "react";
import useAccountStore from "@/stores/accounts";
import { UserAvatar } from "@/components/modules/users";
import { UserAboutBlock } from "@/components/modules/users/blocks";
import { NotificationIcon } from "@/components/common/icons";
import { Link } from "@/i18n/routing";
import { PAGES } from "@/config/pages";

const ProfilePage = () => {
  const { user } = useAccountStore();
  return (
    <div className="flex flex-col gap-8 items-center px-4">
      <div className="flex flex-col items-end w-full">
        <Link className="cursor-pointer" href={PAGES.NOTIFICATIONS}>
          <NotificationIcon size="md" dot />
        </Link>
      </div>

      <UserAvatar user={user} size="6xl" />
      <UserAboutBlock user={user} />
    </div>
  );
};

export default ProfilePage;
