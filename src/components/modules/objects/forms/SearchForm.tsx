"use client";

import React, { FormEvent } from "react";
import { SearchTextInput } from "@/components/common/contols/inputs";
import { useRouter } from "@/i18n/routing";
import { LINKS } from "@/constants/nav";

interface Props {
  className?: string;
}

const SearchForm = ({ className }: Props) => {
  const router = useRouter();

  const search = (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const query = formData.get("query") as string;

    if (query) {
      router.push({
        pathname: LINKS.objects,
        query: { query: query },
      });
    }
  };
  return (
    <form className="w-full" onSubmit={search}>
      <SearchTextInput name="query" className={className} />
      <button type="submit" style={{ display: "none" }} />
    </form>
  );
};

export default SearchForm;
