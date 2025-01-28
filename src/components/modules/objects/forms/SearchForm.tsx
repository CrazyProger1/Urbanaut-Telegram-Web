import React from "react";
import Form from "next/server";
import { SearchTextInput } from "@/components/common/contols/inputs";
import { redirect } from "@/i18n/routing";
import { getLocale } from "next-intl/server";

interface Props {
  className?: string;
}

const search = async (formData: FormData) => {
  "use server";

  const query = formData.get("query")?.toString() || "";

  const locale = await getLocale();

  redirect({
    href: `/objects?query=${encodeURIComponent(query)}`,
    locale,
  });
};

const SearchForm = ({ className }: Props) => {
  return (
    <Form className="w-full" action={search}>
      <SearchTextInput className={className} />
    </Form>
  );
};

export default SearchForm;
