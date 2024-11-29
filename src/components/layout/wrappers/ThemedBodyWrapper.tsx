"use client";

import React, { useContext } from "react";

import { UIContext } from "@/contexts/ui";

interface ThemedBodyProps {
  children: React.ReactNode;
  className?: string;
}

const ThemedBodyWrapper = ({ children, className }: ThemedBodyProps) => {
  const { theme } = useContext(UIContext);
  return <body className={className + " bg-primary " + theme}>{children}</body>;
};

export default ThemedBodyWrapper;
