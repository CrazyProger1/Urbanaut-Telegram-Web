import { CountryIcon } from "@/components/common/icons";
import { LOCALE_COUNTRY_MAP } from "@/config/region";
import { Locale } from "@/i18n/routing";

interface Props {
  language: Locale;
}

const LanguageItem = ({ language }: Props) => {
  return <CountryIcon country={LOCALE_COUNTRY_MAP[language]} />;
};

export default LanguageItem;
