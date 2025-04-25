"use client";
import React from "react";
import { Block } from "@/components/common/blocks";
import { SessionUser } from "@/types/users";
import { HorizontalDivider } from "@/components/common/dividers";
import { Link } from "@/i18n/routing";
import { BlockButton } from "@/components/common/contorls";
import { ICONS } from "@/config/media";
import { PAGES } from "@/config/pages";
import { URLS } from "@/config/urls";
import { useTranslations } from "next-intl";

interface Props {
  user?: SessionUser;
}
const UserAboutBlock = ({ user }: Props) => {
  const t = useTranslations("UserAboutBlock");
  const USER_METRICS = [
    {
      text: t("expeditions"),
      icon: ICONS.BACKPACK,
      href: PAGES.SETTINGS + "?donate=true",
      count: 14,
    },
    {
      text: t("karma"),
      icon: ICONS.DEAL,
      href: URLS.SUPPORT + "?text=%23support%0A",
      count: 24,
    },
    {
      text: t("experience"),
      icon: ICONS.NINJA,
      href: URLS.REPORT + "?text=%23report%0A",
      count: 321,
    },
    {
      text: t("friends"),
      icon: ICONS.FRIENDS,
      className: "last:rounded-b-2xl",
      href: URLS.COMMUNITY,
      count: 4,
    },
  ];
  return (
    <Block blockClassName="w-full" title={`@${user?.username || "username"}`}>
      {USER_METRICS.map(({ text, icon, className, href, count }) => (
        <div className="flex flex-col" key={text}>
          <HorizontalDivider />
          <Link href={href}>
            <BlockButton
              text={text}
              metric={count}
              icon={icon}
              className={className}
            />
          </Link>
        </div>
      ))}
    </Block>
  );
};

export default UserAboutBlock;
