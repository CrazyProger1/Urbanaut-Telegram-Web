import React from "react";
import { LINKS } from "@/constants/nav";
import { redirect } from "@/i18n/routing";

const Page = () => {
  redirect({
    href: LINKS.objects,
    locale: "en",
  });
  return <div />;
};

export default Page;
