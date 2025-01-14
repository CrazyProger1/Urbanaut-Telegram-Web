import React from "react";
import { UserTable } from "@/components/modules/leaderboard/tables";
import { User } from "@/types/users";

const TableSection = () => {
  const users: User[] = [
    {
      id: 7489488665,
      username: "crazy2228",
      rank: "NEWBIE",
    },
    {
      id: 7479599447,
      username: "urbanautdev",
      rank: "STALKER",
    },
    {
      id: 798395009,
      username: "crazyproger1",
      rank: "LEGEND",
    },
    {
      id: 7439174727,
      username: "Nikolai_id865",
      rank: "NEWBIE",
    },
  ];
  return (
    <>
      <UserTable users={users} />
    </>
  );
};

export default TableSection;
