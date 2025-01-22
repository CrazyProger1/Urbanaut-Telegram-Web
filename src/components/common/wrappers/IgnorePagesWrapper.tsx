"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  pages: string[];
  children: React.ReactNode;
}

const IgnorePagesWrapper = ({ children, pages }: Props) => {
  const pathname = usePathname();

  if (pages.includes(pathname)) return null;
  return <div>{children}</div>;
};

export default IgnorePagesWrapper;
