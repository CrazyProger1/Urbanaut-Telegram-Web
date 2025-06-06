"use client";

import React, { useState } from "react";
import {
  AbandonedObjectFilters,
  AbandonedObjectSearchBarParams,
} from "@/types/abandoned";

import { usePathname } from "@/i18n/routing";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import { MoreIcon } from "@/components/common/icons";
import { SearchBarToggle } from "@/components/common/toggles";
import { MODAL_KEYS } from "@/config/params";

interface Props {
  params?: AbandonedObjectFilters & AbandonedObjectSearchBarParams;
}

const ObjectSearchBar = ({ params }: Props) => {
  // TODO: IMPLEMENT & REFACTOR!!!! Mocked for diploma
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
  const getClearedUrl = (query: string) => {
    const searchParams = new URLSearchParams(params);
    searchParams.delete(query);
    return `${pathname}?${searchParams.toString()}`;
  };
  const openCloseButtonClass = clsx(
    "flex flex-col border text-center px-2 justify-center rounded-r-2xl cursor-pointer",
    isBarOpen && "bg-selection border-selection-border",
    !isBarOpen && "bg-foreground border-transparent",
  );
  return (
    <div className="shadow-volume bg-foreground rounded-2xl w-full flex flex-row">
      <div className="flex flex-col w-full">
        <div className="flex flex-row">
          <SearchBarToggle className="rounded-l-2xl">
            {t("category")}
          </SearchBarToggle>
          <SearchBarToggle
            link={
              isDifficultyChosen
                ? getClearedUrl("difficulty_level")
                : getFullUrl(MODAL_KEYS.DIFFICULTY, "true")
            }
            active={isDifficultyChosen}
          >
            {t("difficulty")}
          </SearchBarToggle>
          <SearchBarToggle active={isNearestChosen}>
            {t("location")}
          </SearchBarToggle>
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
