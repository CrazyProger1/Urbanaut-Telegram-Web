import React from "react";
import LanguageItem from "./LanguageItem";
import { LOCALE_COUNTRY_MAP } from "@/config/region";
import { Locale, Link } from "@/i18n/routing";
import { PAGES } from "@/config/pages";

const LanguageSelectTable = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {Object.keys(LOCALE_COUNTRY_MAP).map((locale) => (
        <Link key={locale} href={PAGES.SETTINGS} locale={locale}>
          <LanguageItem key={locale} language={locale as Locale} />
        </Link>
      ))}
    </div>
  );
};

export default LanguageSelectTable;
