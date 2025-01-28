import React from "react";
import { SearchTextInput } from "@/components/common/contols/inputs";
import { LINKS } from "@/constants/nav";
import { getLocale } from "next-intl/server";

interface Props {
  className?: string;
}

const SearchForm = ({ className }: Props) => {
  const locale = getLocale();
  const localizedURL = `${locale}/${LINKS.objects}`;
  return (
    <form className="w-full" action={localizedURL} method="GET">
      <SearchTextInput name="query" className={className} />
      <button type="submit" style={{ display: "none" }} />
    </form>
  );
};

export default SearchForm;
