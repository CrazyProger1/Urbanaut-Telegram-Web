"use server";

import { getLocale } from "next-intl/server";
import { redirect } from "@/i18n/routing";

export const searchAction = async (formData: FormData) => {
  const query = formData.get("query")?.toString() || "";

  const locale = await getLocale();

  redirect({
    href: `/objects?query=${encodeURIComponent(query)}`,
    locale,
  });
};
