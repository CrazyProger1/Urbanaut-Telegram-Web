"use client";

import React from "react";
import { useTelegramMiniApp } from "@/hooks/telegram";

interface Props {
  children: React.ReactNode;
}

const TMAProvider = ({ children }: Props) => {
  useTelegramMiniApp();
  return <>{children}</>;
};

export default TMAProvider;
