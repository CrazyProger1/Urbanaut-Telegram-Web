"use client";

import React from "react";

import { useAccountStore } from "@/stores";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const ThemedBodyWrapper = ({ children, className }: Props) => {
  const { theme } = useAccountStore();
  return (
    <body className={className + " bg-background " + theme}>{children}</body>
  );
};

export default ThemedBodyWrapper;
