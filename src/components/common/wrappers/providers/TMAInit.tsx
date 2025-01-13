"use client";

import React, { useEffect } from "react";

import { useTelegramMiniApp } from "@/hooks/telegram";
import { useLaunchParams } from "@telegram-apps/sdk-react";

const TMAInit = () => {
  useTelegramMiniApp();
  const params = useLaunchParams();

  useEffect(() => {
    console.log("Raw Data:", params.initData);
  }, [params]);

  return <></>;
};

export default TMAInit;
