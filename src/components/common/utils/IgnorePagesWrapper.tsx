"use client";
import { usePathname } from "@/i18n/routing";
import React from "react";

interface Props {
  pages: string[];
  children: React.ReactNode;
}
const IgnorePagesWrapper = ({ pages, children }: Props) => {
  const pathname = usePathname();
  if (pages.includes(pathname)) return null;
  return <div>{children}</div>;
};

export default IgnorePagesWrapper;
