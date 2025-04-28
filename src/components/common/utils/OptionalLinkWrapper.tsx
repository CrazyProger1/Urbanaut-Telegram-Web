"use client";
import Link from "next/link";

import React from "react";
import { useRouter } from "@/i18n/routing";

interface Props {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  className?: string;
  children: React.ReactNode;
}

const OptionalLinkWrapper = ({ href, onClick, className, children }: Props) => {
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
    <Link href={href} passHref>
      <div className={className} onClick={handleClick}>
        {children}
      </div>
    </Link>
  ) : (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
};

export default OptionalLinkWrapper;
