import React from "react";
import { redirect } from "next/navigation";

const Page = () => {
  redirect("/objects");
  return <div />;
};

export default Page;
