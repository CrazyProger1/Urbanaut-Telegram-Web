"use client";

import { useEffect } from "react";
import { backButton, init, useLaunchParams } from "@telegram-apps/sdk-react";
import { useRouter } from "next/navigation";

export const useTelegramMiniApp = () => {
  useEffect(() => {
    try {
      init();
    } catch (exc) {
      console.error(exc);
    }
  }, []);
};

export const useBackButton = () => {
  const router = useRouter();

  useEffect(() => {
    !backButton.isMounted() && backButton.mount();
    backButton.show();
    backButton.onClick(() => {
      backButton.hide();
      router.back();
    });

    return () => {
      backButton.hide();
    };
  }, [router]);
};

export const useInitData = () => {
  const params = useLaunchParams();
  const initDataRaw = params.initDataRaw;
  const initData = params.initData;
  return { initData: initData, initDataRaw: initDataRaw };
};
