"use client";
import React from "react";
import { Block } from "@/components/common/blocks";
import { User } from "@/types/users";
import { HorizontalDivider } from "@/components/common/dividers";
import { ICONS } from "@/config/media";
import { PAGES } from "@/config/pages";
import { URLS } from "@/config/urls";
import { useTranslations } from "next-intl";

interface Props {
  user?: User;
  me?: boolean;
}

const UserAboutBlock = ({ user, me }: Props) => {
  const t = useTranslations("UserAboutBlock");
  const hasDocument = user?.document !== undefined;

  const USER_METRICS = [
    {
      text: t("document"),
      icon: ICONS.PROFILE,
      href: hasDocument ? PAGES.DOCUMENT : undefined,
      disabled: !hasDocument,
    },
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
      count: user?.karma || 0,
    },
    {
      text: t("experience"),
      icon: ICONS.NINJA,
      href: URLS.REPORT + "?text=%23report%0A",
      count: user?.experience || 0,
    },
    {
      text: t("friends"),
      icon: ICONS.FRIENDS,
      className: "last:rounded-b-2xl",
      href: me ? PAGES.FRIENDS : undefined,
      count: user?.friends_count || 0,
    },
  ];
  return (
    <Block blockClassName="w-full" title={`@${user?.username || "username"}`}>
      {USER_METRICS.map(({ text, icon, className, href, count, disabled }) => (
        <div className="flex flex-col" key={text}>
          <HorizontalDivider />
          <Block.Button
            content={text}
            metric={count}
            icon={icon}
            className={className}
            disable={disabled}
            link={href}
          />
        </div>
      ))}
    </Block>
  );
};

export default UserAboutBlock;
