import FooterLink from "@/components/layout/footers/FooterLink";
import { FOOTER_LINKS } from "@/constants/nav";

const Footer = () => (
  <div className="sticky z-10 bottom-0 bg-secondary rounded-t-2xl flex flex-row justify-around">
    {FOOTER_LINKS.map(({ href, image }) => (
      <FooterLink image={image} href={href} key={href} />
    ))}
  </div>
);

export default Footer;
