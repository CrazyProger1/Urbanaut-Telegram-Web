"use client";

import { useEffect } from "react";
import { backButton, init } from "@telegram-apps/sdk-react";
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
    return backButton.onClick(() => {
      backButton.hide();
      router.back();
    });
  }, [router]);
};
