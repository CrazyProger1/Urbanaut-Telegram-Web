import {
  AccountSettings,
  UISettings,
  AboutSettings,
  SecuritySettings,
} from "@/components/modules/settings/blocks";
import {
  DonateModal,
  LanguageModal,
} from "@/components/modules/settings/modals";
import React from "react";

const SettingsPage = async () => {
  return (
    <div className="flex flex-col px-4 gap-4">
      <DonateModal />
      <LanguageModal />
      <UISettings />
      <AccountSettings />
      <AboutSettings />
      <SecuritySettings />
    </div>
  );
};
export default SettingsPage;
