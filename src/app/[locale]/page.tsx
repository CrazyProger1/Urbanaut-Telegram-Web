import React from "react";
import { LINKS } from "@/constants/nav";
import { redirect } from "@/i18n/routing";

const Page = () => {
  redirect({
    href: LINKS.objects,
    locale: "uk",
  });
  return <div />;
};

export default Page;
