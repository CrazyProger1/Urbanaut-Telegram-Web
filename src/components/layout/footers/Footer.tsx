import FooterLink from "@/components/layout/footers/FooterLink";
import { FOOTER_LINKS } from "@/constants/links";

const Footer = () => (
  <div className="sticky z-10 bottom-0 bg-secondary rounded-t-2xl flex flex-row justify-around">
    {FOOTER_LINKS.map((link) => (
      <FooterLink
        image={link.image}
        href={link.href}
        key={link.href}
        active={false}
      />
    ))}
  </div>
);

export default Footer;
