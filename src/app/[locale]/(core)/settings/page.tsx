"use client";
import { useInitDataSafe } from "@/telegram/hooks/client";

const SettingsPage = () => {
  const { initDataRaw } = useInitDataSafe();

  return (
    <div className="cursor-copy text-text font-primary">{initDataRaw}</div>
  );
};
export default SettingsPage;
