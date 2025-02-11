import { ErrorResponse, PaginatedResponse } from "@/types/api";
import { User } from "@/types/users";
import { API_ENDPOINTS } from "@/constants/api";
import { axios } from "@/services/api";

type UsersResponse = PaginatedResponse<User> | ErrorResponse;

export const getUsers = async (): Promise<UsersResponse> => {
  try {
    const response = await axios.get(API_ENDPOINTS.users);

    return {
      success: response.status === 200,
      ...response.data,
    };
  } catch (error) {
    console.error("Error fetching:", error);
    return {
      success: false,
    } as UsersResponse;
  }
};
