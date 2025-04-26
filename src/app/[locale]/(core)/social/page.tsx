import React from "react";
import { redirect } from "@/i18n/routing";
import { PAGES } from "@/config/pages";
import { getLocale } from "next-intl/server";

const SocialPage = async () => {
  const locale = await getLocale();
  redirect({
    href: PAGES.FRIENDS,
    locale: locale,
  });
  return <div />;
};

export default SocialPage;
