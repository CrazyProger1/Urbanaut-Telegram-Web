"use client";

import React from "react";

import { useUIStore } from "@/stores";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const ThemedBodyWrapper = ({ children, className }: Props) => {
  const { theme } = useUIStore();
  return (
    <body className={className + " bg-background " + theme}>{children}</body>
  );
};

export default ThemedBodyWrapper;
