import { ErrorResponse, PaginatedResponse } from "@/types/api";
import { Notification } from "@/types/notifications";
import { API_ENDPOINTS } from "@/config/api";
import { axios } from "@/services/api/api";

type NotificationsResponse = PaginatedResponse<Notification> | ErrorResponse;
export const getNotifications = async (): Promise<NotificationsResponse> => {
  try {
    const url = API_ENDPOINTS.NOTIFICATIONS;
    const response = await axios.get(url);

    return {
      success: response.status === 200,
      ...response.data,
    };
  } catch (error) {
    console.error("Error fetching:", error);
    return {
      success: false,
    } as NotificationsResponse;
  }
};
