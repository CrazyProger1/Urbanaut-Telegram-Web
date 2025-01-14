"use client";

import { useEffect } from "react";
import { useInitData } from "@/hooks/client/telegram";

const TMAAuth = () => {
  const { initDataRaw } = useInitData();

  useEffect(() => {
    document.cookie = `initDataRaw=${initDataRaw}; path=/; max-age=3600`;
  }, []);

  return <></>;
};

export default TMAAuth;
