import React from "react";
import { UserTable } from "@/components/modules/leaderboard/tables";
import { User } from "@/types/users";

interface Props {
  users: User[];
}

const TableSection = ({ users }: Props) => {
  return (
    <>
      <UserTable users={users} />
    </>
  );
};

export default TableSection;
