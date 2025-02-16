import React from "react";
import { BackButtonWrapper } from "@/telegram/components";
import {
  AboutSection,
  AccountSettingsSection,
  UISettingsSection,
} from "@/components/modules/settings/sections";

const SettingsPage = () => (
  <BackButtonWrapper>
    <UISettingsSection />
    <div className="mt-4" />
    <AccountSettingsSection />
    <div className="mt-4" />
    <AboutSection />
  </BackButtonWrapper>
);

export default SettingsPage;
