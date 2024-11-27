import Link from "next/link";

interface FooterLinkProps {
  href: string;
  image: string;
}

const FooterLink = ({ href, image }: FooterLinkProps) => (
  <Link
    href={href}
    className="flex hover:bg-selection p-4 w-full first:rounded-tl-2xl last:rounded-tr-2xl justify-center items-center hover:ring-1 hover:ring-white hover:ring-opacity-40"
  >
    <img className="size-9" src={image} alt="footer-navbar-link" />
  </Link>
);
export default FooterLink;
