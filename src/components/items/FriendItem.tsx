import { FC } from "react";
import { User } from "../../types/users.ts";

interface FriendItemProps {
  friend: User;
}

const FriendItem: FC<FriendItemProps> = ({ friend }) => {
  return (
    <div className="flex flex-row w-full">
      <div className="bg-card rounded-l-2xl p-4 flex flex-row w-full">
        <img src={friend.photo} alt="" className="rounded-2xl" width="60px" />
        <div className="flex flex-col ml-4">
          <p className="text-copy-primary text-lg">{friend.name}</p>
          <p className="text-sm  text-copy-primary">smth</p>
        </div>
      </div>
      <div className="rounded-r-2xl w-32 bg-red"></div>
    </div>
  );
};

export default FriendItem;
