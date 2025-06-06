"use server";

import { API_ENDPOINTS } from "@/config/api";
import { fetchExtended } from "@/services/api/api";
import { User, UserFilters } from "@/types/users";
import {
  PaginatedResponse,
  PaginationParams,
  SuccessfulResponse,
} from "@/types/api";

type UserResponse = SuccessfulResponse & User;
type UsersResponse = PaginatedResponse<User>;

export const getUser = async (id: number): Promise<UserResponse> => {
  try {
    const url = `${API_ENDPOINTS.USER.replace(":id", id.toString())}`;
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
    } as UserResponse;
  }
};
export const getUsers = async (
  params?: UserFilters & PaginationParams,
): Promise<UsersResponse> => {
  console.log("params: ", params);
  try {
    const searchParams = new URLSearchParams(params);
    const url = `${API_ENDPOINTS.USERS}?${searchParams.toString()}`;
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
    } as UsersResponse;
  }
};
