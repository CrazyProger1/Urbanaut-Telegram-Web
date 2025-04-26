import { headers } from "next/headers";
import { getLocale } from "next-intl/server";

export const getPathname = async () => {
  const locale = await getLocale();
  const pathname = (await headers()).get("pathname");
  return pathname?.replace(`/${locale}`, "");
};
