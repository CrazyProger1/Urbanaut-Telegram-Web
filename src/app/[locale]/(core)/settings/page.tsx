import {
  AccountSettings,
  UISettings,
  AboutSettings,
} from "@/components/modules/settings/blocks";
import { DonateModal } from "@/components/modules/settings/modals";
import React from "react";

interface Props {
  searchParams: Promise<{ donate: boolean }>;
}

const SettingsPage = async ({ searchParams }: Props) => {
  return (
    <div className="flex flex-col p-4 gap-4">
      <DonateModal visible={(await searchParams).donate} />
      <UISettings />
      <AccountSettings />
      <AboutSettings />
    </div>
  );
};
export default SettingsPage;
