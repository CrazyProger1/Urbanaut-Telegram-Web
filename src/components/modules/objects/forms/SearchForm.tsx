import React from "react";
import Form from "next/form";

interface Props {
  className?: string;
}

const SearchForm = ({ className }: Props) => {
  return (
    <Form className="w-full" action="/search">
      <input
        placeholder="type to search..."
        className={className}
        name="query"
      />
    </Form>
  );
};

export default SearchForm;
