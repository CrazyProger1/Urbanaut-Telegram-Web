"use client";

import { useEffect } from "react";
import { useInitData } from "@/hooks/client/telegram";
import { useAccountStore } from "@/stores";
import { usePathname, useRouter } from "@/i18n/routing";
import { LINKS } from "@/constants/nav";

const TMAAuth = () => {
  const { initDataRaw, initData } = useInitData();
  const { setInitData } = useAccountStore();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (initData) {
      document.cookie = `initDataRaw=${initDataRaw}; path=/; max-age=3600`;
      setInitData(initData);
    } else {
      if (pathname != LINKS.auth) router.push(LINKS.auth);
    }
  }, []);

  return <></>;
};

export default TMAAuth;
