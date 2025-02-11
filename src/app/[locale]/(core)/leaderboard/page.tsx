import React from "react";
import { TableSection } from "@/components/modules/leaderboard/sections";
import { BackButtonWrapper } from "@/telegram/components";
import { getInitDataCookie } from "@/telegram/utils/server";
import { User } from "@/types/users";
import { getUsers } from "@/services/users";

type Props = {
  params: Promise<{ locale: string }>;
};
const LeaderboardPage = async ({ params }: Props) => {
  let users: User[] = [];

  const { initDataRaw } = await getInitDataCookie();

  try {
    if (initDataRaw) {
      const response = await getUsers(initDataRaw, (await params).locale);
      if (response.success) users = response.results;
    }
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
