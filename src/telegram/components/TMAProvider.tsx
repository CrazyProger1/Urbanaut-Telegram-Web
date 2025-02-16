"use client";

import React from "react";
import dynamic from "next/dynamic";
import { TonConnectUIProvider } from "@/telegram/ui-react";

interface Props {
  children: React.ReactNode;
}

const TMAAuth = dynamic(() => import("./TMAAuth"), {
  ssr: false,
});
const TMAProvider = ({ children }: Props) => {
  return (
    <>
      <TonConnectUIProvider manifestUrl="https://urbanaut.club/manifests/tonconnect-manifest.json">
        <TMAAuth />
        {children}
      </TonConnectUIProvider>
    </>
  );
};

export default TMAProvider;
