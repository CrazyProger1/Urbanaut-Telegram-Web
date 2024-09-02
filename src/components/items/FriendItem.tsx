import { FC } from "react";
import { User } from "../../types/users.ts";

interface FriendItemProps {
  friend: User;
}

const FriendItem: FC<FriendItemProps> = ({ friend }) => {
  return <div></div>;
};

export default FriendItem;
