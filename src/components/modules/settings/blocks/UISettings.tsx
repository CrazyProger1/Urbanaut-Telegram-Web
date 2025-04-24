"use client";
import React, { useTransition } from "react";
import Block from "@/components/common/blocks/Block";
import { Toggle } from "@/components/common/contorls";

import useAccountStore from "@/stores/accounts";
import { toggleAnimations } from "@/services/actions/settings";
import { Loader } from "@/components/common/loaders";
import { useTranslations } from "next-intl";

const UISettings = () => {
  const t = useTranslations("UISettings");
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
    <Block className="flex flex-row gap-4 p-2 pl-4 pb-8" title={t("UI")}>
      <Toggle
        enabled={user?.settings.is_animations_enabled}
        onToggle={handleToggle}
      />
      <div className="flex flex-row justify-between w-full items-center">
        <div>{t("animations")}</div>
        {isPending ? <Loader /> : null}
      </div>
    </Block>
  );
};

export default UISettings;
