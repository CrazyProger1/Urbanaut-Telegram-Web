import { ErrorResponse, PaginatedResponse } from "@/types/api";
import { Notification } from "@/types/notifications";
import { API_ENDPOINTS } from "@/config/api";
import { fetchExtended } from "@/services/api/api";

type NotificationsResponse = PaginatedResponse<Notification> | ErrorResponse;
export const getNotifications = async (): Promise<NotificationsResponse> => {
  try {
    const url = API_ENDPOINTS.NOTIFICATIONS;
    const response = await fetchExtended(url);
    const data = await response.json();

    return {
      success: response.status === 200,
      ...data,
    };
  } catch (error) {
    console.error("Error fetching:", error);
    return {
      success: false,
    } as NotificationsResponse;
  }
};
