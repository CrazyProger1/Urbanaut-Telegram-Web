import React from "react";

import { redirect } from "@/i18n/routing";
import { PAGES } from "@/config/pages";

const Page = () => {
  redirect({
    href: PAGES.OBJECTS,
    locale: "uk",
  });
  return <div />;
};

export default Page;
