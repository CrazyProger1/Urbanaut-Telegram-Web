import React from "react";
import ToastProvider from "./ToastProvider";
import ModalProvider from "./ModalProvider";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <ToastProvider>
      <ModalProvider>{children}</ModalProvider>
    </ToastProvider>
  );
};

export default Providers;
