import React from "react";
import { TableSection } from "@/components/modules/leaderboard/sections";
import { BackButtonWrapper } from "@/telegram/components";
import { User } from "@/types/users";
import { getUsers } from "@/services/users";

const LeaderboardPage = async () => {
  let users: User[] = [];

  try {
    const response = await getUsers();
    if (response.success) users = response.results;
  } catch (err) {
    console.log(err);
  }

  return (
    <BackButtonWrapper>
      {/*<SearchSection />*/}
      {/*<div className="mt-4" />*/}
      <TableSection users={users} />
    </BackButtonWrapper>
  );
};

export default LeaderboardPage;
