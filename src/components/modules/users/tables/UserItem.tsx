import React from "react";
import { User } from "@/types/users";
import { UserAvatar } from "@/components/modules/users";
import { Link } from "@/i18n/routing";
import { PAGES } from "@/config/pages";
import { Block } from "@/components/common/blocks";
import { TelegramIcon } from "@/components/common/icons";
import { NestedLink } from "@/components/common/utils";

interface Props {
  user: User;
}

const UserItem = ({ user }: Props) => {
  return (
    <Link href={PAGES.OTHERS_PROFILE.replace(":id", String(user.id))}>
      <Block
        className="flex flex-row p-2 justify-between items-center pr-4"
        blockClassName="active:bg-selection"
      >
        <div className="flex flex-row">
          <UserAvatar user={user} />

          <div className="pl-2">
            <h1 className="text-lg font-bold font-primary">
              @{user?.nickname || user?.username || "username"}
            </h1>
            <p className="text-text font-primary text-sm">
              {user?.rank.name || "newbie"}
            </p>
          </div>
        </div>
        <NestedLink href={`https://t.me/${user.username}`}>
          <TelegramIcon />
        </NestedLink>
      </Block>
    </Link>
  );
};

export default UserItem;
