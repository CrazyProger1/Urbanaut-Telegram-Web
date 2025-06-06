"use server";

import {
  ErrorResponse,
  PaginatedResponse,
  PaginationParams,
  SuccessfulResponse,
} from "@/types/api";
import { API_ENDPOINTS } from "@/config/api";
import { fetchExtended } from "@/services/api/api";
import { AbandonedObject, AbandonedObjectFilters } from "@/types/abandoned";

export type AbandonedObjectsResponse =
  | PaginatedResponse<AbandonedObject>
  | ErrorResponse;

export type AbandonedObjectResponse =
  | (SuccessfulResponse & AbandonedObject)
  | ErrorResponse;

export const getAbandonedObjects = async (
  params?: AbandonedObjectFilters & PaginationParams,
): Promise<AbandonedObjectsResponse> => {
  try {
    const searchParams = new URLSearchParams(params);
    const url = `${API_ENDPOINTS.OBJECTS}?${searchParams.toString()}`;
    const response = await fetchExtended(url);
    const data = await response.json();

    return {
      success: response.status === 200,
      ...data,
    } as AbandonedObjectsResponse;
  } catch (error) {
    console.error("Error fetching:", error);
    return {
      success: false,
    } as AbandonedObjectsResponse;
  }
};

export const getAbandonedObject = async (
  id: number,
): Promise<AbandonedObjectResponse> => {
  try {
    const url = API_ENDPOINTS.OBJECT.replace(":id", String(id));
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
    } as AbandonedObjectResponse;
  }
};
