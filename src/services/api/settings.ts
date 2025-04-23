import { API_ENDPOINTS } from "@/config/api";
import { axios } from "@/services/api/api";
import { Settings } from "@/types/users";
import { SuccessfulResponse } from "@/types/api";

type SettingsResponse = SuccessfulResponse & Settings;

export const updateSettings = async (
  settings: Settings,
): Promise<SettingsResponse> => {
  try {
    const url = API_ENDPOINTS.SETTINGS;
    const response = await axios.patch(url, settings);

    return {
      success: response.status === 200,
      ...response.data,
    };
  } catch (error) {
    console.error("Error fetching:", error);
    return {
      success: false,
    } as SettingsResponse;
  }
};
