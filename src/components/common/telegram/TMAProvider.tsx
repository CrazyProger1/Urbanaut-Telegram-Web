"use client";

import React from "react";
import { TonConnectUIProvider } from "@/telegram/ui-react";
import { init } from "@telegram-apps/sdk";
import TMAAuth from "./TMAAuth";

interface Props {
  children: React.ReactNode;
  manifestUrl?: string;
}

try {
  init();
} catch (e) {
  // console.error("Failed to init Telegram Mini App. Check your environment");
}

const TMAProvider = ({ children, manifestUrl }: Props) => {
  return (
    <>
      <TMAAuth />
      <TonConnectUIProvider manifestUrl={manifestUrl}>
        {children}
      </TonConnectUIProvider>
    </>
  );
};

export default TMAProvider;
