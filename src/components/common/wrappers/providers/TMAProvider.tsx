"use client";

import React from "react";
import { useTelegramMiniApp } from "@/hooks/telegram";
import { initData } from "@telegram-apps/sdk-react";

interface Props {
  children: React.ReactNode;
}

const TMAProvider = ({ children }: Props) => {
  useTelegramMiniApp();
  const initDataRaw = initData.raw();
  const initDataState = initData.state();

  console.log(initDataRaw);
  console.log(initDataState);

  return <>{children}</>;
};

export default TMAProvider;
