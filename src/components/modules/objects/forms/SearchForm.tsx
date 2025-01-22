import React from "react";
import Form from "next/form";
import { SearchTextInput } from "@/components/common/contols/inputs";

interface Props {
  className?: string;
}

const SearchForm = ({ className }: Props) => {
  return (
    <Form className="w-full" action="/">
      <SearchTextInput className={className} />
    </Form>
  );
};

export default SearchForm;
