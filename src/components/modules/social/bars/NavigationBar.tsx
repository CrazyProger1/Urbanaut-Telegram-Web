import React from "react";
import { SwitchBar } from "@/components/common/bars";
import { PAGES } from "@/config/pages";
import { getPathname } from "@/helpers/pathname";
import { getTranslations } from "next-intl/server";

const NavigationBar = async () => {
  const pathname = await getPathname();
  const t = await getTranslations("SocialLayout");
  const SWITCH_PAGES = [
    {
      href: PAGES.REFERRALS,
      text: t("referrals"),
    },
    {
      href: PAGES.FRIENDS,
      text: t("friends"),
    },
    {
      href: PAGES.TEAMS,
      text: t("teams"),
      disabled: true,
    },
  ];
  return (
    <SwitchBar>
      {SWITCH_PAGES.map(({ href, text, disabled }) => (
        <SwitchBar.Item
          key={href}
          link={href}
          disabled={disabled}
          selected={pathname?.includes(href)}
        >
          {text}
        </SwitchBar.Item>
      ))}
    </SwitchBar>
  );
};

export default NavigationBar;
