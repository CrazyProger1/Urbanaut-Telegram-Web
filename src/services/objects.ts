import {
  ErrorResponse,
  SuccessfulResponse,
  PaginatedResponse,
} from "@/types/api";
import { AbandonedObject, AbandonedObjectFilters } from "@/types/objects";
import { API_URL } from "@/config/urls";

type ObjectsResponse = PaginatedResponse<AbandonedObject> | ErrorResponse;
type ObjectResponse = (SuccessfulResponse & AbandonedObject) | ErrorResponse;
export const getObject = async (id: number): Promise<ObjectResponse> => {
  const response = await fetch(`${API_URL}/objects/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 120,
    },
  });
  const data = await response.json();

  return {
    success: response.ok,
    ...data,
  };
};
import axios from "axios";

export const getObjects = async (
  initData: string,
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

  const url = `${API_URL}/objects/?${queryParams.toString()}`;

  const encodedInitData = encodeURIComponent(initData);

  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: encodedInitData,
      },
    });

    return {
      success: response.status === 200,
      ...response.data,
    };
  } catch (error) {
    console.error("Error fetching objects:", error);
    return {
      success: false,
    } as ObjectsResponse;
  }
};
