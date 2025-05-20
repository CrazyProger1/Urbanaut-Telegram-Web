"use client";
import React, { useTransition } from "react";
import { Block } from "@/components/common/blocks";
import { Toggle } from "src/components/common/toggles";

import useAccountStore from "@/stores/accounts";
import { toggleAnimations } from "@/services/actions/settings";
import { Loader } from "@/components/common/loaders";
import { useTranslations } from "next-intl";
import { HorizontalDivider } from "@/components/common/dividers";
import { COUNTRY_ICONS } from "@/config/media";
import { useLocale } from "use-intl";
import { Locale } from "@/i18n/routing";
import { PAGES } from "@/config/pages";
import { CountryIcon } from "@/components/common/icons";
import { LOCALE_COUNTRY_MAP } from "@/config/region";

const UISettings = () => {
  const t = useTranslations("UISettings");
  const locale = useLocale() as Locale;
  const { user, updateUserSettings } = useAccountStore();
  const [isPending, startTransition] = useTransition();
  const handleToggle = () => {
    const value = !user?.settings.is_animations_enabled;
    startTransition(async () => {
      const settings = await toggleAnimations(value, user?.settings);
      updateUserSettings(settings);
    });
  };
  return (
    <Block title={t("UI")}>
      <HorizontalDivider />
      <Block.Button
        content={t("language")}
        icon={COUNTRY_ICONS[LOCALE_COUNTRY_MAP[locale]]}
        link={PAGES.SETTINGS + "?language=true"}
      />
      <HorizontalDivider />
      <div className="flex flex-row gap-2 p-2 py-3 pb-8s rounded-b-2xl">
        <Toggle
          enabled={user?.settings.is_animations_enabled}
          onToggle={handleToggle}
        />
        <div className="flex flex-row justify-between w-full items-center">
          <div>{t("animations")}</div>
          {isPending ? <Loader /> : null}
        </div>
      </div>
    </Block>
  );
};

export default UISettings;
