import { FC } from "react";
import Link from "next/link";

interface FooterNavbarButtonProps {
  href: string;
  image: string;
  onChoose?: (page: string) => void;
}

const FooterLink: FC<FooterNavbarButtonProps> = ({ href, image, onChoose }) => {
  return (
    <Link href={href}>
      <img className="size-9" src={image} alt="footer-navbar-link"></img>
    </Link>
  );
};

export default FooterLink;
