"use client";

import React from "react";
import {
  AbandonedObjectFilters,
  AbandonedObjectSearchBarParams,
} from "@/types/abandoned";
import SearchBarItem from "./SearchBarItem";
import { Link, usePathname } from "@/i18n/routing";
import clsx from "clsx";

interface Props {
  params?: AbandonedObjectFilters & AbandonedObjectSearchBarParams;
}

const ObjectSearchBar = ({ params }: Props) => {
  const pathname = usePathname();
  const isBarOpened = params?.bar_opened === "true";
  const isDifficultyChosen = !!params?.difficulty_level;
  const isNearestChosen = !!params?.nearest;

  const getFullUrl = (query: string, value: string) => {
    const searchParams = new URLSearchParams(params);
    searchParams.set(query, value);
    return `${pathname}?${searchParams.toString()}`;
  };
  const openCloseButtonClass = clsx(
    "flex flex-col border text-center px-4 justify-center rounded-r-2xl",
    isBarOpened && "bg-selection border-selection-border",
    !isBarOpened && "bg-foreground border-transparent",
  );
  return (
    <div className="shadow-volume bg-foreground rounded-2xl w-full flex flex-row">
      <div className="flex flex-col w-full">
        <div className="flex flex-row">
          <SearchBarItem className="rounded-l-2xl">category</SearchBarItem>
          <SearchBarItem active={isDifficultyChosen}>difficulty</SearchBarItem>
          <SearchBarItem active={isNearestChosen}>nearest</SearchBarItem>
        </div>
        {isBarOpened && (
          <div className="flex flex-row">
            <SearchBarItem>test</SearchBarItem>
            <SearchBarItem>test</SearchBarItem>
            <SearchBarItem>test</SearchBarItem>
          </div>
        )}
        {isBarOpened && (
          <div>
            <input
              type="text"
              className="w-full bg-foreground rounded-bl-2xl border-none ring-0 outline-none focus:ring-0 focus:border-none text-center p-2 text-text placeholder-text"
              placeholder="search..."
            />
          </div>
        )}
      </div>

      <Link
        href={getFullUrl("bar_opened", String(!isBarOpened))}
        className={openCloseButtonClass}
      >
        <div>:</div>
      </Link>
    </div>
  );
};

export default ObjectSearchBar;
