"use client";

import React, { useEffect } from "react";
import { initData, useSignal, init } from "@telegram-apps/sdk-react";

const TMAInit = () => {
  useEffect(() => {
    init();
  }, []);

  const initDataRaw = useSignal(initData.raw);
  const initDataState = useSignal(initData.user);

  useEffect(() => {
    console.log("Raw Data:", initDataRaw);
    console.log("User Data:", initDataState);
  }, [initDataRaw, initDataState]);

  return <></>;
};

export default TMAInit;
