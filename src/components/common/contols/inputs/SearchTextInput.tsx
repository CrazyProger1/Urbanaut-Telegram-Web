import React from "react";
import { useTranslations } from "use-intl";

interface Props {
  className?: string;
}

const SearchTextInput = ({ className }: Props) => {
  const t = useTranslations("SearchTextInput");
  return (
    <input
      placeholder={t("search_placeholder")}
      className={className}
      name="query"
    />
  );
};

export default SearchTextInput;
