import React from "react";
import { BackButtonWrapper } from "@/telegram/components";
import {
  AboutSection,
  UISettingsSection,
} from "@/components/modules/settings/sections";

const SettingsPage = () => (
  <BackButtonWrapper>
    <UISettingsSection />
    <div className="mt-4" />
    <AboutSection />
  </BackButtonWrapper>
);

export default SettingsPage;
