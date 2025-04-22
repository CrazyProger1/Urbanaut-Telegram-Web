import {
  AccountSettings,
  UISettings,
  AboutSettings,
} from "@/components/modules/settings/blocks";

const SettingsPage = () => {
  return (
    <div className="flex flex-col p-4 gap-4">
      <UISettings />
      <AccountSettings />
      <AboutSettings />
    </div>
  );
};
export default SettingsPage;
