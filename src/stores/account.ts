import { create } from "zustand";
import { InitData } from "@telegram-apps/types";

export type Theme = "dark" | "light";

interface Actions {
  setAnimationsEnabled: (enabled: boolean) => void;
  setTheme: (theme: Theme) => void;
  setInitData: (initData?: InitData) => void;
}

interface State {
  theme: Theme;
  animationsEnabled: boolean;
  initData?: InitData;
}

const useAccountStore = create<State & Actions>((set) => ({
  theme: "light",
  animationsEnabled: true,
  initData: undefined,

  setAnimationsEnabled: (animationEnabled) => {
    set({
      animationsEnabled: animationEnabled,
    });
  },

  setTheme: (theme) => {
    set({
      theme: theme,
    });
  },

  setInitData: (initData) => {
    set({
      initData: initData,
    });
  },
}));

export default useAccountStore;
