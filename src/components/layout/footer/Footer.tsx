import React from "react";
import { FOOTER_LINKS } from "@/constants/links";
import FooterLink from "@/components/layout/footer/FooterLink";

const Footer = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 ml-4 mr-4 bg-foreground rounded-t-2xl flex flex-row justify-around">
      {FOOTER_LINKS.map((link) => (
        <div
          className={`p-4 w-full flex justify-center items-center first:rounded-tl-2xl last:rounded-tr-2xl`}
        >
          <FooterLink image={link.image} href={link.href} />
        </div>
      ))}
    </div>
  );
};

export default Footer;
