import React from "react";
import { useTranslations } from "use-intl";

interface Props {
  className?: string;
}

const SearchTextInput = ({ className }: Props) => {
  const t = useTranslations("SearchTextInput");
  return (
    <input
      placeholder={t("type to search...")}
      className={className}
      name="query"
    />
  );
};

export default SearchTextInput;
