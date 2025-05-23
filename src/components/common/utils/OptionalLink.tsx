"use client";

import React from "react";
import { useRouter } from "@/i18n/routing";

interface Props {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
  children: React.ReactNode;
}

const OptionalLink = ({ href, onClick, className, children }: Props) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (href) {
      e.preventDefault();
      router.push(href, { scroll: false });
    }
    if (onClick) {
      onClick(e);
    }
  };

  return href ? (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  ) : (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export default OptionalLink;
