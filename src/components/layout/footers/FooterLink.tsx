"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface FooterLinkProps {
  href: string;
  image: string;
}

const FooterLink = ({ href, image }: FooterLinkProps) => {
  const active = usePathname() === href;
  return (
    <Link
      href={href}
      className={
        "flex p-4 w-full first:rounded-tl-2xl last:rounded-tr-2xl justify-center items-center " +
        (active ? "bg-selection border border-selection-border" : "")
      }
    >
      <img className="size-9" src={image} alt="footer-navbar-link" />
    </Link>
  );
};

export default FooterLink;
