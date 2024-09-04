import FooterNavbar from "../navbars/FooterNavbar.tsx";
import { useEffect, useRef } from "react";
import uiStore from "../../stores/UIStore.ts";

const Footer = () => {
  const footerRef = useRef(null);
  useEffect(() => {
    if (footerRef.current)
      uiStore.setFooterHeight(footerRef.current.clientHeight);
  }, [footerRef]);
  return (
    <footer
      ref={footerRef}
      className="fixed inset-x-0 bottom-0 ml-4 mr-4 bg-foreground rounded-t-2xl"
    >
      <FooterNavbar />
    </footer>
  );
};

export default Footer;
