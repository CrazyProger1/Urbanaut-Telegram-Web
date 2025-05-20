"use client";

import React, { useState } from "react";
import {
  AbandonedObjectFilters,
  AbandonedObjectSearchBarParams,
} from "@/types/abandoned";
import SearchBarItem from "./SearchBarItem";
import { usePathname } from "@/i18n/routing";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { MoreIcon } from "@/components/common/icons";

interface Props {
  params?: AbandonedObjectFilters & AbandonedObjectSearchBarParams;
}

const ObjectSearchBar = ({ params }: Props) => {
  const pathname = usePathname();
  const [isBarOpen, setIsBarOpen] = useState(false);
  const isDifficultyChosen = !!params?.difficulty_level;
  const isNearestChosen = !!params?.nearest;
  const t = useTranslations("ObjectSearchBar");

  const getFullUrl = (query: string, value: string) => {
    const searchParams = new URLSearchParams(params);
    searchParams.set(query, value);
    return `${pathname}?${searchParams.toString()}`;
  };
  const openCloseButtonClass = clsx(
    "flex flex-col border text-center px-2 justify-center rounded-r-2xl",
    isBarOpen && "bg-selection border-selection-border",
    !isBarOpen && "bg-foreground border-transparent",
  );
  return (
    <div className="shadow-volume bg-foreground rounded-2xl w-full flex flex-row">
      <div className="flex flex-col w-full">
        <div className="flex flex-row">
          <SearchBarItem className="rounded-l-2xl">
            {t("category")}
          </SearchBarItem>
          <SearchBarItem
            link={getFullUrl("difficulty", String(!isDifficultyChosen))}
            active={isDifficultyChosen}
          >
            {t("difficulty")}
          </SearchBarItem>
          <SearchBarItem active={isNearestChosen}>
            {t("location")}
          </SearchBarItem>
        </div>
        {isBarOpen && (
          <form>
            <input
              name="query"
              type="text"
              className="w-full bg-foreground rounded-bl-2xl border-none ring-0 outline-none focus:ring-0 focus:border-none text-center p-2 text-text placeholder-text"
              placeholder={t("search")}
            />
          </form>
        )}
      </div>

      <div
        onClick={() => setIsBarOpen(!isBarOpen)}
        className={openCloseButtonClass}
      >
        <MoreIcon className="h-5 w-5 text-text fill-current" />
      </div>
    </div>
  );
};

export default ObjectSearchBar;
