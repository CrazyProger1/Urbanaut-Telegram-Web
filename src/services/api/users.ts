import { API_ENDPOINTS } from "@/config/api";
import { axios } from "@/services/api/api";
import { User } from "@/types/users";
import { SuccessfulResponse } from "@/types/api";

type UserResponse = SuccessfulResponse & User;

export const getUser = async (id: number): Promise<UserResponse> => {
  try {
    const url = `${API_ENDPOINTS.USER.replace(":id", id.toString())}`;
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
