"use client";

import React from "react";
import { useTelegramMiniApp } from "@/hooks/telegram";
import { initData, useSignal } from "@telegram-apps/sdk-react";

const TMAInit = () => {
  useTelegramMiniApp();
  const initDataRaw = useSignal(initData.raw);
  const initDataState = useSignal(initData.state);

  console.log(initDataRaw, initDataState);

  return <></>;
};

export default TMAInit;
