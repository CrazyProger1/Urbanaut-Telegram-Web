import React from "react";
import clsx from "clsx";
import Link from "next/link";

interface Props {
  active: boolean;
  href: string;
  text: string;
}

const TabLink = ({ active, href, text }: Props) => {
  const className = clsx(
    "flex p-2 w-full first:rounded-l-2xl last:rounded-r-2xl justify-center items-center text-text font-primary cursor-pointer",
    active && "bg-selection border border-selection-border shadow-volume-frame",
    !active && "bg-foreground",
  );
  return (
    <Link href={href} className={className}>
      {text}
    </Link>
  );
};

export default TabLink;
