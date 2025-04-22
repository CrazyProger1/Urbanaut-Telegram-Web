"use client";
import React, { useState, useTransition } from "react";
import Block from "@/components/common/blocks/Block";
import { Toggle } from "@/components/common/contorls";

import useAccountStore from "@/stores/accounts";
import { toggleAnimations } from "@/services/actions/settings";

const UISettings = () => {
  const { user } = useAccountStore();
  const [isPending, startTransition] = useTransition();
  const [animationsEnabled, setAnimationsEnabled] = useState<boolean>(
    user?.settings.is_animations_enabled || false,
  );
  const handleToggle = () => {
    const value = !animationsEnabled;
    setAnimationsEnabled(value);
    startTransition(async () => {
      await toggleAnimations(value, user?.settings);
    });
  };
  return (
    <Block className="flex flex-row gap-4 p-2 pl-4 pb-8" title="UI">
      <Toggle enabled={animationsEnabled} onToggle={handleToggle} />
      Animations
    </Block>
  );
};

export default UISettings;
