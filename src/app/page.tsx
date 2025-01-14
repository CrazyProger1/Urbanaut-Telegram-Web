import React from "react";
import { redirect } from "next/navigation";
import { LINKS } from "@/constants/nav";

const Page = () => {
  redirect(LINKS.objects);
  return <div />;
};

export default Page;
