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
export const getObjects = async (
  filters: AbandonedObjectFilters,
): Promise<ObjectsResponse> => {
  const queryParams = new URLSearchParams();

  for (const [key, value] of Object.entries(filters)) {
    if (Array.isArray(value)) {
      value.forEach((v) => queryParams.append(key, v));
    } else {
      queryParams.append(key, value);
    }
  }

  const url = `${API_URL}/objects?${queryParams.toString()}`;

  const response = await fetch(url, {
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
