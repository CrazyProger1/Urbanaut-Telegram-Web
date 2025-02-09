"use client";

import React from "react";
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
