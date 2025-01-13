"use client";

import React, { useEffect, useState } from "react";
import { useTelegramMiniApp } from "@/hooks/telegram";
import { initData, useSignal, init } from "@telegram-apps/sdk-react";

const TMAInit = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  useTelegramMiniApp();

  useEffect(() => {
    init();
    setIsInitialized(true);
  }, []);

  const initDataRaw = useSignal(initData.raw);
  const initDataState = useSignal(initData.user);

  useEffect(() => {
    console.log(initDataRaw, initDataState);
  }, [initDataRaw, initDataState, isInitialized]);

  return <></>;
};

export default TMAInit;
