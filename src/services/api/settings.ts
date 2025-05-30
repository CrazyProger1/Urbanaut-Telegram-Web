import { API_ENDPOINTS } from "@/config/api";
import { fetchExtended } from "@/services/api/api";
import { Settings } from "@/types/users";
import { SuccessfulResponse } from "@/types/api";

type SettingsResponse = SuccessfulResponse & Settings;

export const updateSettings = async (
  settings: Settings,
): Promise<SettingsResponse> => {
  try {
    const url = API_ENDPOINTS.SETTINGS;
    const response = await fetchExtended(url, {
      method: "PATCH",
      body: JSON.stringify(settings),
    });
    const data = await response.json();

    return {
      success: response.status === 200,
      ...data,
    };
  } catch (error) {
    console.error("Error fetching:", error);
    return {
      success: false,
    } as SettingsResponse;
  }
};
