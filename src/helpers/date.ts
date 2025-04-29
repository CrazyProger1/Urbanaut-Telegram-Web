import { format } from "date-fns";
import { enUS, uk } from "date-fns/locale";
import { Locale } from "@/i18n/routing";

export const formatDate = (date?: Date, locale?: Locale) => {
  if (!date) return "unknown";

  if (!locale) locale = "en";

  const localeMap = {
    en: enUS,
    uk: uk,
  };
  const translations = localeMap[locale];
  try {
    return format(date, "MMMM d, yyyy", { locale: translations }).toLowerCase();
  } catch (e) {
    return "unknown";
  }
};

export const formatTime = (date?: Date) => {
  if (!date) return "";
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};
