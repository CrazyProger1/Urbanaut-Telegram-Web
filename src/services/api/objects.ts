import { ErrorResponse, PaginatedResponse } from "@/types/api";
import { API_ENDPOINTS } from "@/config/api";
import { axios } from "@/services/api/api";
import { AbandonedObject } from "@/types/abandoned";

type AbandonedObjectsResponse =
  | PaginatedResponse<AbandonedObject>
  | ErrorResponse;
export const getAbandonedObjects =
  async (): Promise<AbandonedObjectsResponse> => {
    try {
      const url = API_ENDPOINTS.OBJECTS;
      const response = await axios.get(url);

      return {
        success: response.status === 200,
        ...response.data,
      };
    } catch (error) {
      console.error("Error fetching:", error);
      return {
        success: false,
      } as AbandonedObjectsResponse;
    }
  };
