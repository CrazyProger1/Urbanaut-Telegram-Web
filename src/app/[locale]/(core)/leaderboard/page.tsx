import React from "react";
import {
  SearchSection,
  TableSection,
} from "@/components/modules/leaderboard/sections";
import { BackButtonWrapper } from "@/telegram/components";

const LeaderboardPage = () => {
  return (
    <BackButtonWrapper>
      <SearchSection />
      <div className="mt-4" />
      <TableSection />
    </BackButtonWrapper>
  );
};

export default LeaderboardPage;
