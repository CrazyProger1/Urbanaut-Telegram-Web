import React from "react";
import { getTranslations } from "next-intl/server";
import { PAGES } from "@/config/pages";
import { SwitchBar } from "@/components/common/bars";
import { UserFilters } from "@/types/users";

interface Props {
  filters?: UserFilters;
}

const LeaderboardNavigationBar = async ({ filters }: Props) => {
  const t = await getTranslations("LeaderboardNavigationBar");

  const LEADERBOARD_FILTERS = [
    {
      text: t("experience"),
      ordering: "-experience",
      selected: filters?.ordering === "-experience",
    },
    {
      text: t("karma"),
      ordering: "-karma",
      selected: filters?.ordering === "-karma",
    },
  ];
  return (
    <SwitchBar>
      {LEADERBOARD_FILTERS.map(({ text, selected, ordering }) => (
        <SwitchBar.Item
          key={text}
          link={PAGES.LEADERBOARD + `?ordering=${ordering}`}
          selected={selected}
        >
          {text}
        </SwitchBar.Item>
      ))}
    </SwitchBar>
  );
};

export default LeaderboardNavigationBar;
