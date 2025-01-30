"use client";

import { useEffect } from "react";
import { backButton, init, useLaunchParams } from "@telegram-apps/sdk-react";
import { usePathname, useRouter } from "@/i18n/routing";

export const useTelegramMiniApp = () => {
  useEffect(() => {
    try {
      init();
    } catch (exc) {
      console.error(exc);
    }
  }, []);
};

export const useBackButton = (path?: string) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    !backButton.isMounted() && backButton.mount();
    backButton.show();
    backButton.onClick(() => {
      backButton.hide();

      if (!path) router.back();
      else if (pathname != path) router.push(path);
    });

    return () => {
      backButton.hide();
    };
  }, [pathname, router, path]);
};

export const useInitData = () => {
  const params = useLaunchParams();
  const initDataRaw = params.initDataRaw;
  const initData = params.initData;
  return { initData: initData, initDataRaw: initDataRaw };
};
