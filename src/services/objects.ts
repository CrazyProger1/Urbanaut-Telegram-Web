import {
  ErrorResponse,
  SuccessfulResponse,
  PaginatedResponse,
} from "@/types/api";
import { AbandonedObject, AbandonedObjectFilters } from "@/types/objects";
import { axios } from "@/services/api";
import { API_ENDPOINTS } from "@/constants/api";

type ObjectsResponse = PaginatedResponse<AbandonedObject> | ErrorResponse;
type ObjectResponse = (SuccessfulResponse & AbandonedObject) | ErrorResponse;

export const getObject = async (id: number): Promise<ObjectResponse> => {
  try {
    const url = API_ENDPOINTS.object.replace("[id]", String(id));
    const response = await axios.get(url);

    return {
      success: response.status === 200,
      ...response.data,
    };
  } catch (error) {
    console.error("Error fetching:", error);
    return {
      success: false,
    } as ObjectResponse;
  }
};

export const getObjects = async (
  filters: AbandonedObjectFilters,
): Promise<ObjectsResponse> => {
  const queryParams = new URLSearchParams();

  for (const [key, value] of Object.entries(filters)) {
    if (Array.isArray(value)) {
      value.forEach((v) => queryParams.append(key, v));
    } else {
      queryParams.append(key, String(value));
    }
  }
  const url = API_ENDPOINTS.objects + `?${queryParams.toString()}`;

  try {
    const response = await axios.get(url);

    return {
      success: response.status === 200,
      ...response.data,
    };
  } catch (error) {
    console.error("Error fetching:", error);
    return {
      success: false,
    } as ObjectsResponse;
  }
};
