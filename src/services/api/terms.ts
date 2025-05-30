"use server";

import { SuccessfulResponse } from "@/types/api";
import { API_ENDPOINTS } from "@/config/api";
import { fetchExtended } from "@/services/api/api";
import { Terms } from "@/types/terms";

type TermsResponse = SuccessfulResponse & Terms;

export const getCurrentTerms = async (): Promise<TermsResponse> => {
  try {
    const url = `${API_ENDPOINTS.CURRENT_TERMS}`;
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
    } as TermsResponse;
  }
};
