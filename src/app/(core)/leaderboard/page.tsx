import React from "react";
import {
  SearchSection,
  TableSection,
} from "@/components/modules/leaderboard/sections";

const LeaderboardPage = () => {
  return (
    <>
      <SearchSection />
      <div className="mt-4" />
      <TableSection />
    </>
  );
};

export default LeaderboardPage;
