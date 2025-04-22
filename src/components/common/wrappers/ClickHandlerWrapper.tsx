"use client";

import React, { MouseEventHandler } from "react";

interface Props {
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  children: React.ReactNode;
}

const ClickHandlerWrapper = ({ className, children, onClick }: Props) => {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export default ClickHandlerWrapper;
