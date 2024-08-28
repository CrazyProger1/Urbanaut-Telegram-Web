import { FC } from "react";
import { User } from "../../types/users.ts";

interface FriendItemProps {
  friend: User;
}

const FriendItem: FC<FriendItemProps> = ({ friend }) => {
  return (
    <div className="bg-card rounded-2xl p-4 flex flex-row">
      <img src={friend.photo} alt="" className="rounded-2xl" width="60px" />
      <div className="flex flex-col ml-4">
        <p className="text-copy-primary text-lg">{friend.name}</p>
        <p className="text-sm  text-copy-primary">smth</p>
      </div>
    </div>
  );
};

export default FriendItem;
