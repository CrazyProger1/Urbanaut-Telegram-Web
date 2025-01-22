"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "@/i18n/routing";

interface Props {
  href: string;
  image: string;
}

const FooterLink = ({ href, image }: Props) => {
  const active = usePathname() === href;

  const className = clsx(
    "flex p-4 w-full first:rounded-tl-2xl last:rounded-tr-2xl justify-center items-center",
    active && "bg-selection border border-selection-border shadow-volume-frame",
  );
  return (
    <Link href={href} className={className}>
      <img className="size-9" src={image} alt="footer-navbar-link" />
    </Link>
  );
};

export default FooterLink;
