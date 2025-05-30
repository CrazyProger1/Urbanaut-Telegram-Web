"use server";

import {
  ErrorResponse,
  PaginatedResponse,
  PaginationParams,
  SuccessfulResponse,
} from "@/types/api";
import { API_ENDPOINTS } from "@/config/api";
import { fetchExtended } from "@/services/api/api";
import { CommunityEvent } from "@/types/events";

export type EventsResponse = PaginatedResponse<CommunityEvent> | ErrorResponse;

export type EventResponse =
  | (SuccessfulResponse & CommunityEvent)
  | ErrorResponse;

export const getEvents = async (
  params?: PaginationParams,
): Promise<EventsResponse> => {
  try {
    const searchParams = new URLSearchParams(params);
    const url = `${API_ENDPOINTS.EVENTS}?${searchParams.toString()}`;
    const response = await fetchExtended(url);
    const data = await response.json();

    return {
      success: response.status === 200,
      ...data,
    } as EventsResponse;
  } catch (error) {
    console.error("Error fetching:", error);
    return {
      success: false,
    } as EventsResponse;
  }
};

export const getEvent = async (id: number): Promise<EventResponse> => {
  try {
    const url = API_ENDPOINTS.EVENT.replace(":id", String(id));
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
    } as EventResponse;
  }
};
