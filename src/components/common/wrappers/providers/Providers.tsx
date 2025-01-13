"use client";

import React from "react";
import ToastProvider from "./ToastProvider";
import ModalProvider from "./ModalProvider";
import dynamic from "next/dynamic";


interface Props {
  children: React.ReactNode;
}
const TMAProvider = dynamic(() => import("./TMAProvider"), { ssr: false });

const Providers = ({ children }: Props) => (
  <TMAProvider>
    <ToastProvider>
      <ModalProvider>{children}</ModalProvider>
    </ToastProvider>
  </TMAProvider>
);

export default Providers;
