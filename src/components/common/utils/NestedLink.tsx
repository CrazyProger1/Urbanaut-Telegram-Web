"use client";

import React from "react";
import { Link } from "@/i18n/routing";

interface Props {
  href: string;
  children?: React.ReactNode;
}
const NestedLink = ({ children, href }: Props) => {
  return (
    <Link onClick={(ev) => ev.stopPropagation()} href={href}>
      {children}
    </Link>
  );
};

export default NestedLink;
