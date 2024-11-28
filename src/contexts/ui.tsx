"use client";

import { createContext } from "react";

export type Theme = "dark" | "light";
export type UISettings = {
  theme: Theme;
  animationsEnabled: boolean;

  setAnimations: (enabled: boolean) => void;
  setTheme: (theme: Theme) => void;
};

export const DEFAULT_UI_SETTINGS: UISettings = {
  theme: "dark",
  animationsEnabled: true,

  setAnimations: (enabled) => {
    this.animationsEnabled = enabled;
  },
  setTheme: (theme) => {
    this.theme = theme;
  },
};
export const UIContext = createContext<UISettings>(DEFAULT_UI_SETTINGS);
