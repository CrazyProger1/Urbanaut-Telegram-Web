import { ErrorResponse, PaginatedResponse, Response } from "@/types/api";
import { API_ENDPOINTS } from "@/config/api";
import { axios } from "@/services/api/api";
import { User } from "@/types/users";
import { ReferralLink } from "@/types/referrals";

type ReferralsResponse = PaginatedResponse<User> | ErrorResponse;
type ReferralsLinksResponse = PaginatedResponse<ReferralLink> | ErrorResponse;
type ApplyReferralCodeResponse = Response;

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

export const getReferralLinks = async (): Promise<ReferralsLinksResponse> => {
  try {
    const url = API_ENDPOINTS.REFERRAL_LINKS;
    const response = await axios.get(url);

    return {
      success: response.status === 200,
      ...response.data,
    };
  } catch (error) {
    console.error("Error fetching:", error);
    return {
      success: false,
    } as ReferralsLinksResponse;
  }
};

export const applyReferralCode = async (
  code: string,
): Promise<ApplyReferralCodeResponse> => {
  try {
    const url = API_ENDPOINTS.APPLY_REFERRAL_LINK.replace(":code", code);
    const response = await axios.post(url);

    return {
      success: response.status === 200,
    };
  } catch (error) {
    console.error("Error fetching:", error);
    return {
      success: false,
    } as ApplyReferralCodeResponse;
  }
};
