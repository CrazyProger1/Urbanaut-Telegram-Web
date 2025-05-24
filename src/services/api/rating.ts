"use server";

import { API_ENDPOINTS } from "@/config/api";
import { axios } from "@/services/api/api";
import { SuccessfulResponse } from "@/types/api";
import { Rating } from "@/types/common";

type VoteResponse = SuccessfulResponse & Rating;

export const vote = async (
  id: number,
  value: number,
): Promise<VoteResponse> => {
  try {
    const url = API_ENDPOINTS.VOTE.replace(":id", String(id));
    const response = await axios.post(url, { value: value });

    return {
      success: response.status === 200,
      ...response.data,
    };
  } catch (error) {
    console.error("Error fetching:", error);
    return {
      success: false,
    } as VoteResponse;
  }
};
