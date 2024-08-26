import FooterNavbarLink from "../links/FooterNavbarLink.tsx";
import { FOOTER_NAVBAR_LINKS } from "../../constants/links.ts";

const FooterNavbar = () => {
  return (
    <div className="flex justify-around">
      {FOOTER_NAVBAR_LINKS.map((link) => (
        <div className="bg-background">
          <div className="m-3">
            <FooterNavbarLink {...link} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterNavbar;
