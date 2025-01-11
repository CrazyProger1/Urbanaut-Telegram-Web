import { useEffect } from "react";
import { init } from "@telegram-apps/sdk-react";

export const useTelegramMiniApp = () => {
  useEffect(() => {
    try {
      init();
    } catch (exc) {
      console.error(exc);
    }
  }, []);
};
