import { FC } from "react";
import { User } from "../../types/users.ts";
import FriendItem from "../items/FriendItem.tsx";

interface FriendsTableProps {
  friends: User[];
}

const FriendsTable: FC<FriendsTableProps> = ({ friends }) => {
  return (
    <div>
      {friends.map((obj) => (
        <div className="mt-4 mb-4">
          <FriendItem key={obj.name} friend={obj} />
        </div>
      ))}
    </div>
  );
};

export default FriendsTable;
