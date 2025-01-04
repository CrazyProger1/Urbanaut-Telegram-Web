import React from "react";

interface Props {
  children?: React.ReactNode;
}

const ModalTitle = ({ children }: Props) => (
  <div className="text-lg text-text text-center font-primary font-bold">
    {children}
  </div>
);

export default ModalTitle;
