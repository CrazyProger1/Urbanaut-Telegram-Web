import { create } from "zustand";

export type Theme = "dark" | "light";

interface State {
  theme: Theme;
  animationsEnabled: boolean;

  setAnimationsEnabled: (enabled: boolean) => void;
  setTheme: (theme: Theme) => void;
}

const useUIStore = create<State>((set) => ({
  theme: "light",
  animationsEnabled: true,

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
}));

export default useUIStore;
