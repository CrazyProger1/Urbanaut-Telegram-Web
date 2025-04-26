import React from "react";
import { User } from "@/types/users";
import { UserAvatar } from "@/components/modules/users";

interface Props {
  user: User;
}

const UserItem = ({ user }: Props) => {
  return (
    <div className="bg-foreground w-full flex flex-row rounded-2xl p-2 shadow-volume">
      <UserAvatar user={user} />
    </div>
  );
};

export default UserItem;
