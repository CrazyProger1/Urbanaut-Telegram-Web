"use client";

import React from "react";
import dynamic from "next/dynamic";

const TMAInit = dynamic(() => import("./TMAInit"), { ssr: false });

interface Props {
  children: React.ReactNode;
}

const TMAProvider = ({ children }: Props) => {
  return (
    <>
      <TMAInit />
      {children}
    </>
  );
};

export default TMAProvider;
