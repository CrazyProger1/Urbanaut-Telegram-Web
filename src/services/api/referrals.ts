import { ErrorResponse, PaginatedResponse, Response } from "@/types/api";
import { API_ENDPOINTS } from "@/config/api";
import { fetchExtended } from "@/services/api/api";
import { User } from "@/types/users";
import { ReferralLink } from "@/types/referrals";

type ReferralsResponse = PaginatedResponse<User> | ErrorResponse;
type ReferralsLinksResponse = PaginatedResponse<ReferralLink> | ErrorResponse;
type ApplyReferralCodeResponse = Response;

export const getReferrals = async (): Promise<ReferralsResponse> => {
  try {
    const url = API_ENDPOINTS.REFERRALS;
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
    } as ReferralsResponse;
  }
};

export const getReferralLinks = async (): Promise<ReferralsLinksResponse> => {
  try {
    const url = API_ENDPOINTS.REFERRAL_LINKS;
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
    } as ReferralsLinksResponse;
  }
};
