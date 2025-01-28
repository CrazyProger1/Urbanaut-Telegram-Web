import React from "react";
import { useTranslations } from "use-intl";

interface Props {
  name: string;
  className?: string;
}

const SearchTextInput = ({ name, className }: Props) => {
  const t = useTranslations("SearchTextInput");
  return (
    <input
      placeholder={t("search_placeholder")}
      className={className}
      name={name}
    />
  );
};

export default SearchTextInput;
