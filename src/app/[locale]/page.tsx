import React from "react";
import { LINKS } from "@/constants/nav";
import { redirect } from "next/navigation";

const Page = () => {
  redirect(LINKS.objects);
  return <div />;
};

export default Page;
