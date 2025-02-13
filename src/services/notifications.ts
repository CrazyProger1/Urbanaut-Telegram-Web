import { ErrorResponse, PaginatedResponse } from "@/types/api";
import { Notification } from "@/types/notifications";
import { axios } from "@/services/api";
import { API_ENDPOINTS } from "@/constants/api";

type NotificationsResponse = PaginatedResponse<Notification> | ErrorResponse;
export const getNotifications = async (): Promise<NotificationsResponse> => {
  try {
    const url = API_ENDPOINTS.notifications;
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
