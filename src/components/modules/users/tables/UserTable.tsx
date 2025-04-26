import React from "react";
import { User } from "@/types/users";
import UserItem from "./UserItem";

interface Props {
  users: User[];
}

const UserTable = ({ users }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserTable;
