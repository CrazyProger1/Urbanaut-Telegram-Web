"use client";

import React from "react";
import { SwitchBar } from "@/components/common/bars";
import { Link, usePathname } from "@/i18n/routing";
import { PAGES } from "@/config/pages";
import { useTranslations } from "next-intl";

const NavigationBar = () => {
  const pathname = usePathname();
  const t = useTranslations("SocialLayout");
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
    },
  ];
  return (
    <SwitchBar>
      {SWITCH_PAGES.map(({ href, text }) => (
        <Link className="w-full" key={text} href={href}>
          <SwitchBar.Item selected={pathname.includes(href)}>
            {text}
          </SwitchBar.Item>
        </Link>
      ))}
    </SwitchBar>
  );
};

export default NavigationBar;
