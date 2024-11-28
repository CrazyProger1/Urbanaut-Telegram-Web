"use client";

import { createContext } from "react";

export type Theme = "dark" | "light";
export type UISettings = {
  theme: Theme;
  animationsEnabled: boolean;
};

export const DEFAULT_UI_SETTINGS: UISettings = {
  theme: "dark",
  animationsEnabled: true,
};
export const UIContext = createContext<UISettings>(DEFAULT_UI_SETTINGS);
