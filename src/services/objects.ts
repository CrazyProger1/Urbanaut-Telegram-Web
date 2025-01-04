import {
  ErrorResponse,
  SuccessfulResponse,
  PaginatedResponse,
} from "@/types/api";
import { AbandonedObject } from "@/types/objects";
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
export const getObjects = async (): Promise<ObjectsResponse> => {
  const response = await fetch(`${API_URL}/objects`, {
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
