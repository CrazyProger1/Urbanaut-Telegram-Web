import { observer } from "mobx-react";
import FooterNavbarLink from "../links/FooterNavbarLink.tsx";
import { FOOTER_NAVBAR_LINKS } from "../../config/content.ts";
import uiStore from "../../stores/UIStore.ts";

const FooterNavbar = observer(() => {
  const handlePageChosen = (page: string) => uiStore.setPage(page);

  return (
    <div className="flex flex-row justify-around">
      {FOOTER_NAVBAR_LINKS.map((link) => (
        <div
          className={`p-4 w-full flex justify-center items-center 
        ${link.to == uiStore.currentPage ? "bg-selection/10" : ""}
        first:rounded-tl-2xl last:rounded-tr-2xl
        `}
        >
          <FooterNavbarLink
            image={link.image}
            to={link.to}
            onChoose={handlePageChosen}
          />
        </div>
      ))}
    </div>
  );
});

export default FooterNavbar;
