import React from "react";
import UserItem from "./UserItem";
import { User } from "@/types/users";

interface Props {
  users: User[];
}

const UserTable = ({ users }: Props) => {
  return (
    <div className="gap-4 flex flex-col">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserTable;
