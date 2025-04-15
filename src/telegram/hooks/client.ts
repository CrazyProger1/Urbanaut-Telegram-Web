"use client";

import { useEffect } from "react";
import { backButton, init, useLaunchParams } from "@telegram-apps/sdk-react";
import { usePathname, useRouter } from "@/i18n/routing";
import { setInitDataCookie } from "@/telegram/utils/client";

export const useTMASafe = () => {
  useEffect(() => {
    try {
      init();
    } catch (exc) {
      console.warn(exc);
    }
  }, []);
};

export const useBackButtonSafe = (path?: string) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    try {
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
    } catch (exc) {
      console.warn(exc);
    }
  }, [pathname, router, path]);
};

export const useInitDataSafe = () => {
  try {
    const params = useLaunchParams();
    const initDataRaw = params.initDataRaw;
    const initData = params.initData;
    return { initData: initData, initDataRaw: initDataRaw };
  } catch (exc) {
    return { initData: null, initDataRaw: null };
  }
};

export const useTMAAuthSafe = (onAuthFailed: () => void) => {
  useTMASafe();
  const initDataSet = useInitDataSafe();

  useEffect(() => {
    if (initDataSet.initData && initDataSet.initDataRaw) {
      setInitDataCookie(initDataSet.initData, initDataSet.initDataRaw);
    } else {
      onAuthFailed();
    }
  }, [initDataSet.initData, initDataSet.initDataRaw, onAuthFailed]);
};
