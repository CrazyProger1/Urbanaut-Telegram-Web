import { FOOTER_PAGES } from "@/config/pages";
import FooterLink from "./FooterLink";

const Footer = () => (
  <div className="sticky mx-4 z-10 bottom-0 bg-foreground rounded-t-2xl flex flex-row justify-around shadow-volume">
    {FOOTER_PAGES.map(({ PAGE, ICON }) => (
      <FooterLink icon={ICON} page={PAGE} key={PAGE} />
    ))}
  </div>
);

export default Footer;
