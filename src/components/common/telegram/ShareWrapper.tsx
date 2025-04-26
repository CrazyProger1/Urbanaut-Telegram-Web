"use client";
import React from "react";
import { shareURL } from "@telegram-apps/sdk";

interface Props {
  children: React.ReactNode;
  link: string;
}
const ShareWrapper = ({ children, link }: Props) => {
  return <div onClick={() => shareURL(link)}>{children}</div>;
};

export default ShareWrapper;
