import React from "react";
import { UnavailablePage } from "@/components/common/pages";
import { ICONS } from "@/constants/media";
import { BackButtonWrapper } from "@/telegram/components";
import { UISettingsSection } from "@/components/modules/settings/sections";

const SettingsPage = () => (
  <BackButtonWrapper>
    <UISettingsSection />
  </BackButtonWrapper>
);

export default SettingsPage;
