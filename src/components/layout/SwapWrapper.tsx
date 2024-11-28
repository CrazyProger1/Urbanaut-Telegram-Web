"use client";

import React from "react";

interface SwapWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const SwapWrapper = ({ children, className }: SwapWrapperProps) => {
  return <div className={className}>{children}</div>;
  // return <div className={className}>{children}</div>;
};

export default SwapWrapper;
