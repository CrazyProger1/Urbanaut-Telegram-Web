import Link from "next/link";

interface FooterLinkProps {
  href: string;
  image: string;
  active: boolean;
}

const FooterLink = ({ href, image, active }: FooterLinkProps) => {
  return (
    <Link
      href={href}
      className={
        "flex p-4 w-full first:rounded-tl-2xl last:rounded-tr-2xl justify-center items-center " +
        (active ? "bg-selection" : "")
      }
    >
      <img className="size-9" src={image} alt="footer-navbar-link" />
    </Link>
  );
};

export default FooterLink;
