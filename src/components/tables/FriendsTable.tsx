import { FC } from "react";
import { User } from "../../types/users.ts";
import FriendItem from "../items/FriendItem.tsx";

interface FriendsTableProps {
  friends: User[];
}

const FriendsTable: FC<FriendsTableProps> = ({ friends }) => {
  return (
    <div>

    </div>
  );
};

export default FriendsTable;
