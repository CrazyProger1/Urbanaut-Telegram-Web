"use server";

import { SuccessfulResponse } from "@/types/api";
import { API_ENDPOINTS } from "@/config/api";
import { axios } from "@/services/api/api";
import { Terms } from "@/types/terms";

type TermsResponse = SuccessfulResponse & Terms;

export const getCurrentTerms = async (): Promise<TermsResponse> => {
  try {
    const url = `${API_ENDPOINTS.CURRENT_TERMS}`;
    const response = await axios.get(url);

    return {
      success: response.status === 200,
      ...response.data,
    };
  } catch (error) {
    console.error("Error fetching:", error);
    return {
      success: false,
    } as TermsResponse;
  }
};
