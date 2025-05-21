"use client";

import React, { useState } from "react";
import {
  AbandonedObjectFilters,
  AbandonedObjectSearchBarParams,
} from "@/types/abandoned";

import clsx from "clsx";
import { useTranslations } from "next-intl";
import { MoreIcon } from "@/components/common/icons";
import { SearchBarToggle } from "@/components/common/toggles";

interface Props {
  params?: AbandonedObjectFilters & AbandonedObjectSearchBarParams;
}

const PostSearchBar = ({ params }: Props) => {
  // TODO: IMPLEMENT & REFACTOR!!!! Mocked for diploma
  const [isBarOpen, setIsBarOpen] = useState(false);
  const t = useTranslations("PostSearchBar");

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
            {t("topic")}
          </SearchBarToggle>
          <SearchBarToggle>{t("length")}</SearchBarToggle>
          <SearchBarToggle>{t("author")}</SearchBarToggle>
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

export default PostSearchBar;
