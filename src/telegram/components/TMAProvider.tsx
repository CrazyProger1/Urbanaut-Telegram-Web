"use client";

import React from "react";
import dynamic from "next/dynamic";
import { TonConnectUIProvider } from "@/telegram/ui-react";

interface Props {
  children: React.ReactNode;
  manifest_url: string;
}

const TMAAuth = dynamic(() => import("./TMAAuth"), {
  ssr: false,
});
const TMAProvider = ({ children, manifest_url }: Props) => {
  return (
    <>
      <TonConnectUIProvider manifestUrl={manifest_url}>
        <TMAAuth />
        {children}
      </TonConnectUIProvider>
    </>
  );
};

export default TMAProvider;
