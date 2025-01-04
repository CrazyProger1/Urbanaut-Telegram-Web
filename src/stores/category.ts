import { create } from "zustand";
import { AbandonedObjectCategory } from "@/types/categories";

export type Theme = "dark" | "light";

interface State {
  toplevelCategories: AbandonedObjectCategory[];
  activeCategories: AbandonedObjectCategory[];
}

const useCategoryStore = create<State>((set) => ({
  toplevelCategories: [],
  activeCategories: [],

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

export default useCategoryStore;
