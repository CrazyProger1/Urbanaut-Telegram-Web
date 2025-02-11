import { API_URL } from "@/config/urls";
import axios from "axios";
import { ErrorResponse, PaginatedResponse } from "@/types/api";
import { User } from "@/types/users";

type UsersResponse = PaginatedResponse<User> | ErrorResponse;

export const getUsers = async (
  initData: string,
  locale: string,
): Promise<UsersResponse> => {
  const url = `${API_URL}/users/`;

  const encodedInitData = encodeURIComponent(initData);

  try {
    // noinspection JSAnnotator
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": locale,
        Authorization: `tma ${encodedInitData}`,
      },
    });

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
