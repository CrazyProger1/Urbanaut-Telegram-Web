import FooterLink from "@/components/layout/footers/FooterLink";
import { FOOTER_LINKS } from "@/constants/links";

const Footer = () => (
  <div className="fixed inset-x-0 bottom-0 ml-4 mr-4 bg-secondary rounded-t-2xl flex flex-row justify-around">
    {FOOTER_LINKS.map((link) => (
      <FooterLink image={link.image} href={link.href} key={link.href} />
    ))}
  </div>
);

export default Footer;
