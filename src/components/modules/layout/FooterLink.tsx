"use client";
import clsx from "clsx";
import { usePathname, Link } from "@/i18n/routing";
import Image from "next/image";
import { ALTS } from "@/config/media";

interface Props {
  page: string;
  icon: string;
}

const FooterLink = ({ page, icon }: Props) => {
  const active = usePathname() === page;

  const className = clsx(
    "flex p-4 w-full first:rounded-tl-2xl last:rounded-tr-2xl justify-center items-center",
    active && "bg-selection border border-selection-border shadow-volume",
  );
  return (
    <Link href={page} className={className}>
      <Image
        width={32}
        height={32}
        className="size-9 drop-shadow-volume"
        src={icon}
        alt={ALTS.FOOTER_LINK}
      />
    </Link>
  );
};

export default FooterLink;
