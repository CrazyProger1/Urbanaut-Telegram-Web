"use client";

import React from "react";
import { useTMASafe } from "@/hooks/client/telegram";
import dynamic from "next/dynamic";

interface Props {
  children: React.ReactNode;
}

const TMAAuth = dynamic(() => import("./TMAAuth"), {
  ssr: false,
});
const TMAProvider = ({ children }: Props) => {
  return (
    <>
      <TMAAuth />
      {children}
    </>
  );
};

export default TMAProvider;
