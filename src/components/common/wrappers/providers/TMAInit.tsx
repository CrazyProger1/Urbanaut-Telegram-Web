"use client";

import React, { useEffect } from "react";
import { initData, useSignal, init } from "@telegram-apps/sdk-react";

const TMAInit = () => {
  useEffect(() => {
    init();
  }, []);

  const initDataRaw = initData.raw();

  useEffect(() => {
    console.log("Raw Data:", initDataRaw);
  }, [initDataRaw]);

  return <></>;
};

export default TMAInit;
