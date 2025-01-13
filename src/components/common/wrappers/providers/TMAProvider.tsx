"use client";

import React, { useEffect, useState } from "react";
import { useTelegramMiniApp } from "@/hooks/telegram";
import { initData, useSignal } from "@telegram-apps/sdk-react";

interface Props {
  children: React.ReactNode;
}

const TMAProvider = ({ children }: Props) => {
  useTelegramMiniApp();
  const initDataRaw = useSignal(initData.raw);
  const initDataState = useSignal(initData.state);

  console.log(initDataRaw, initDataState);

  return <>{children}</>;
};

export default TMAProvider;
