import React from "react";
import ToastProvider from "./ToastProvider";
import ModalProvider from "./ModalProvider";
import TMAProvider from "./TMAProvider";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => (
  <TMAProvider>
    <ToastProvider>
      <ModalProvider>{children}</ModalProvider>
    </ToastProvider>
  </TMAProvider>
);

export default Providers;
