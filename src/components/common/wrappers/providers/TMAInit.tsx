"use client";

import React, { useEffect } from "react";
import { initData, init } from "@telegram-apps/sdk";
import { useSignal } from "@telegram-apps/sdk-react";

const TMAInit = () => {
  useEffect(() => {
    init();
  }, []);

  const initDataRaw = useSignal(initData.raw);

  useEffect(() => {
    console.log("Raw Data:", initDataRaw);
  }, [initDataRaw]);

  return <></>;
};

export default TMAInit;
