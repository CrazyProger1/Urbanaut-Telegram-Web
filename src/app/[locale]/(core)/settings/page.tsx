import React from "react";
import { UnavailablePage } from "@/components/common/pages";
import { ICONS } from "@/constants/media";
import { BackButtonWrapper } from "@/telegram/components";

const SettingsPage = () => (
  <BackButtonWrapper>
    <UnavailablePage icon={ICONS.LOCK} />
  </BackButtonWrapper>
);

export default SettingsPage;
