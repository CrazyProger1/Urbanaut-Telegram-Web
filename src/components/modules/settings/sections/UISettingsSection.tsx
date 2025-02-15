"use client";

import React from "react";
import { Block } from "@/components/common/blocks";
import { SwitchToggle } from "@/components/common/contols/toggles";
import { useAccountStore } from "@/stores";

interface Props {}

const UiSettingsSection = () => {
  const { animationsEnabled, setAnimationsEnabled } = useAccountStore();
  return (
    <Block name="UI">
      <SwitchToggle
        label="Animations"
        checked={animationsEnabled}
        onToggle={() => {
          setAnimationsEnabled(!animationsEnabled);
        }}
      />
    </Block>
  );
};

export default UiSettingsSection;
