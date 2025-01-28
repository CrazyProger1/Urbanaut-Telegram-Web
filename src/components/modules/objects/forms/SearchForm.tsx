import React from "react";
import { SearchTextInput } from "@/components/common/contols/inputs";
import { searchAction } from "@/components/modules/objects/forms/actions";

interface Props {
  className?: string;
}

const SearchForm = ({ className }: Props) => {
  return (
    <form className="w-full" action={searchAction}>
      <SearchTextInput name="query" className={className} />
      <button type="submit" style={{ display: "none" }} />
    </form>
  );
};

export default SearchForm;
