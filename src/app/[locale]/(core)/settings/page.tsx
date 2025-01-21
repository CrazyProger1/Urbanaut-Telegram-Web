import React from "react";
import { UnavailablePage } from "@/components/common/pages";
import { ICONS } from "@/constants/media";
import { BackButtonWrapper } from "@/components/common/wrappers";

const SettingsPage = () => (
  <BackButtonWrapper>
    <UnavailablePage icon={ICONS.lock} />
  </BackButtonWrapper>
);

export default SettingsPage;
