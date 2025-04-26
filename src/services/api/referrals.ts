import { ErrorResponse, PaginatedResponse } from "@/types/api";
import { API_ENDPOINTS } from "@/config/api";
import { axios } from "@/services/api/api";
import { User } from "@/types/users";

type ReferralsResponse = PaginatedResponse<User> | ErrorResponse;
export const getReferrals = async (): Promise<ReferralsResponse> => {
  try {
    const url = API_ENDPOINTS.REFERRALS;
    const response = await axios.get(url);

    return {
      success: response.status === 200,
      ...response.data,
    };
  } catch (error) {
    console.error("Error fetching:", error);
    return {
      success: false,
    } as ReferralsResponse;
  }
};
