import React from "react";
import { User } from "@/types/users";

interface Props {
  user: User;
}

const UserItem = ({ user }: Props) => {
  return <div>{user.username}</div>;
};

export default UserItem;
