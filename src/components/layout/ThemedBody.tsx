"use client";

import React, { useContext } from "react";

import { ThemeContext } from "@/contexts/theme";

interface ThemedBodyProps {
  children: React.ReactNode;
  className?: string;
}

const ThemedBody = ({ children, className }: ThemedBodyProps) => {
  const { variant } = useContext(ThemeContext);
  return (
    <body className={className + " bg-primary " + variant}>{children}</body>
  );
};

export default ThemedBody;
