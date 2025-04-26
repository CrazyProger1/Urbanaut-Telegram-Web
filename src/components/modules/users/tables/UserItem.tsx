import React from "react";
import { User } from "@/types/users";
import { UserAvatar } from "@/components/modules/users";
import { Link } from "@/i18n/routing";
import { PAGES } from "@/config/pages";
import { Block } from "@/components/common/blocks";

interface Props {
  user: User;
}

const UserItem = ({ user }: Props) => {
  return (
    <Block>
      <Link href={PAGES.PROFILE}>
        <UserAvatar user={user} />
      </Link>

      <div className="pl-2">
        <h1 className="text-lg font-bold font-primary">
          @{user?.nickname || user?.username || "username"}
        </h1>
        <p className="text-text font-primary text-sm">
          {user?.rank || "NEWBIE"}
        </p>
      </div>
    </Block>
  );
};

export default UserItem;
