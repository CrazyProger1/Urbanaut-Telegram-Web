import FooterNavbarLink from "../links/FooterNavbarLink.tsx";
import { FOOTER_NAVBAR_LINKS } from "../../constants/links.ts";
import uiStore from "../../stores/UIStore.ts";
import { observer } from "mobx-react";

const FooterNavbar = observer(() => {
  const handlePageChosen = (page: string) => {
    uiStore.setPage(page);
  };
  return (
    <div className="flex justify-around">
      {FOOTER_NAVBAR_LINKS.map((link) => (
        <div
          className={uiStore.currentPage == link.to ? "bg-cta" : ""}
        >
          <div className="m-3">
            <FooterNavbarLink {...link} onChoose={handlePageChosen} />
          </div>
        </div>
      ))}
    </div>
  );
});

export default FooterNavbar;
