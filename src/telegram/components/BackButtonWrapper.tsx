"use client";
import React from "react";
import { useBackButtonSafe } from "@/telegram/hooks/client";

interface Props {
  path?: string;
  children: React.ReactNode;
}

const BackButtonWrapper = ({ path, children }: Props) => {
  useBackButtonSafe(path);
  return <>{children}</>;
};

export default BackButtonWrapper;
