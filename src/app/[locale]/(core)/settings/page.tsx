"use client";
import { useInitDataSafe } from "@/telegram/hooks/client";
import { useEffect } from "react";
import { BASE_URL } from "@/config/base";

const SettingsPage = () => {
  const { initDataRaw } = useInitDataSafe();

  useEffect(() => {
    fetch(`${BASE_URL}/api/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ initData: initDataRaw }),
    });
  }, [initDataRaw]);

  return (
    <div className="cursor-copy text-text font-primary">{initDataRaw}</div>
  );
};
export default SettingsPage;
