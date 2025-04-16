"use client";
import React from "react";

interface Props {
  path?: string;
  children: React.ReactNode;
}

const BackButtonWrapper = ({ path, children }: Props) => {
  return <>{children}</>;
};

export default BackButtonWrapper;
