import { useLaunchParams } from "@telegram-apps/sdk-react";

const SettingsPage = () => {
  const params = useLaunchParams();
  const initDataRaw = params.initDataRaw;

  return (
    <div className="cursor-copy text-text font-primary">{initDataRaw}</div>
  );
};
export default SettingsPage;
