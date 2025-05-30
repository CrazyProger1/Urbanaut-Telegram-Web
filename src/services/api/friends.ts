"use server";

import {
  ErrorResponse,
  PaginatedResponse,
  PaginationParams,
} from "@/types/api";
import { API_ENDPOINTS } from "@/config/api";
import { fetchExtended } from "@/services/api/api";
import { Friend } from "@/types/friends";

type FriendsResponse = PaginatedResponse<Friend> | ErrorResponse;

export const getFriends = async (
  params?: PaginationParams,
): Promise<FriendsResponse> => {
  try {
    const searchParams = new URLSearchParams(params);
    const url = `${API_ENDPOINTS.FRIENDS}?${searchParams.toString()}`;
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
    } as FriendsResponse;
  }
};
