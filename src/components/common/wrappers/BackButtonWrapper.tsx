"use client";
import React from "react";
import { useBackButton } from "@/hooks/client/telegram";

interface Props {
  path?: string;
  children: React.ReactNode;
}

const BackButtonWrapper = ({ path, children }: Props) => {
  useBackButton(path);
  return <>{children}</>;
};

export default BackButtonWrapper;
