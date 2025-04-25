"use client";
import React from "react";
import useAccountStore from "@/stores/accounts";
import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}
const ThemedBodyWrapper = ({ children, className }: Props) => {
  const { user } = useAccountStore();
  const combinedClassName = clsx(
    className,
    user?.settings.theme?.toLowerCase() || "light",
  );
  return <body className={combinedClassName}>{children}</body>;
};

export default ThemedBodyWrapper;
