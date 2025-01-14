"use client";

import React from "react";
import dynamic from "next/dynamic";

const Auth = dynamic(() => import("@/app/Auth"), {
  ssr: false,
});

const Page = () => {
  return <Auth />;
};

export default Page;
