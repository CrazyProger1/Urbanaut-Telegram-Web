import React from "react";
import { UserTable } from "@/components/modules/leaderboard/tables";

const TableSection = () => {
  const users = [
    {
      id: 7489488665,
      username: "crazy2228",
    },
    {
      id: 7479599447,
      username: "urbanautdev",
    },
    {
      id: 798395009,
      username: "crazyproger1",
    },
    {
      id: 7439174727,
      username: "Nikolai_id865",
    },
  ];
  return (
    <>
      <UserTable users={users} />
    </>
  );
};

export default TableSection;
