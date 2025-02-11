import { API_URL } from "@/config/urls";

import { ErrorResponse, PaginatedResponse } from "@/types/api";
import { User } from "@/types/users";
import axios from "axios";

type UsersResponse = PaginatedResponse<User> | ErrorResponse;

export const getUsers = async (): Promise<UsersResponse> => {
  const url = `${API_URL}/users/`;

  try {
    const response = await axios.get(url);

    return {
      success: response.status === 200,
      ...response.data,
    };
  } catch (error) {
    console.error("Error fetching objects:", error);
    return {
      success: false,
    } as UsersResponse;
  }
};
