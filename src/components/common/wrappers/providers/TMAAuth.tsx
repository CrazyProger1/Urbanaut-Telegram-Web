"use client";

import { useEffect } from "react";
import { useInitData } from "@/hooks/client/telegram";
import { useAccountStore } from "@/stores";

const TMAAuth = () => {
  const { initDataRaw, initData } = useInitData();
  const { setInitData } = useAccountStore();

  useEffect(() => {
    document.cookie = `initDataRaw=${initDataRaw}; path=/; max-age=3600`;
    setInitData(initData);
  }, []);

  return <></>;
};

export default TMAAuth;
