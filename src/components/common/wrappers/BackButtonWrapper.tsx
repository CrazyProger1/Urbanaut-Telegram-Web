"use client";
import React from "react";
import { useBackButton } from "@/hooks/telegram";

interface Props {
  children: React.ReactNode;
}

const BackButtonWrapper = ({ children }: Props) => {
  useBackButton();
  return <>{children}</>;
};

export default BackButtonWrapper;
