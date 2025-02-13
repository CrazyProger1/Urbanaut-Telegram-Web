import {
  ErrorResponse,
  PaginatedResponse,
  SuccessfulResponse,
} from "@/types/api";
import { User } from "@/types/users";
import { API_ENDPOINTS } from "@/constants/api";
import { axios } from "@/services/api";

type UsersResponse = PaginatedResponse<User> | ErrorResponse;
type UserResponse = SuccessfulResponse & User;
export const getUsers = async (): Promise<UsersResponse> => {
  try {
    const url = API_ENDPOINTS.users;
    const response = await axios.get(url);

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

export const getUser = async (id: number): Promise<UserResponse> => {
  try {
    const url = `${API_ENDPOINTS.user.replace("[id]", id.toString())}`;
    const response = await axios.get(url);

    return {
      success: response.status === 200,
      ...response.data,
    };
  } catch (error) {
    console.error("Error fetching:", error);
    return {
      success: false,
    } as UserResponse;
  }
};
