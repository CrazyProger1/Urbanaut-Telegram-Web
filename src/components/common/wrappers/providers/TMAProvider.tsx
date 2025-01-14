"use client";

import React from "react";
import { useTelegramMiniApp } from "@/hooks/client/telegram";
import dynamic from "next/dynamic";

interface Props {
  children: React.ReactNode;
}

const TMAAuth = dynamic(() => import("./TMAAuth"), {
  ssr: false,
});
const TMAProvider = ({ children }: Props) => {
  useTelegramMiniApp();
  return (
    <>
      <TMAAuth />
      {children}
    </>
  );
};

export default TMAProvider;
