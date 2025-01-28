import React from "react";
import Form from "next/form";
import { SearchTextInput } from "@/components/common/contols/inputs";
import { LINKS } from "@/constants/nav";

interface Props {
  className?: string;
}

const SearchForm = ({ className }: Props) => {
  return (
    <Form className="w-full" action={LINKS.objects}>
      <SearchTextInput className={className} />
    </Form>
  );
};

export default SearchForm;
