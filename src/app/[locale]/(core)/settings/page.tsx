import {
  AccountSettings,
  UISettings,
  AboutSettings,
} from "@/components/modules/settings/blocks";
import { DonateModal } from "@/components/modules/settings/modals";
import React from "react";

const SettingsPage = async () => {
  return (
    <div className="flex flex-col px-4 gap-4">
      <DonateModal />
      <UISettings />
      <AccountSettings />
      <AboutSettings />
    </div>
  );
};
export default SettingsPage;
