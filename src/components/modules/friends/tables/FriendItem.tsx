import React from "react";
import { Friend } from "@/types/friends";
import UserItem from "@/components/modules/users/tables/UserItem";

interface Props {
  friend: Friend;
}
const FriendItem = ({ friend }: Props) => {
  const user = friend.friend;
  return <UserItem user={user} />;
};

export default FriendItem;
