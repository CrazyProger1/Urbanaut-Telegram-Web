import { FC } from "react";
import { User } from "../../types/users.ts";

interface FriendsTableProps {
  friends: User[];
}

const FriendsTable: FC<FriendsTableProps> = ({ friends }) => {
  return <div>{friends[0].name}</div>;
};

export default FriendsTable;
