"use server";

import { Settings } from "@/types/users";
import { updateSettings } from "@/services/api/settings";

export const toggleAnimations = async (
  animationsEnabled: boolean,
  settings?: Settings,
) => {
  const updatedSettings = {
    ...settings,
    is_animations_enabled: animationsEnabled,
  };
  await updateSettings(updatedSettings);
};
