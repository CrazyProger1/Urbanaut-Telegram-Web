"use server";

import {
  ErrorResponse,
  PaginatedResponse,
  PaginationParams,
} from "@/types/api";
import { API_ENDPOINTS } from "@/config/api";
import { axios } from "@/services/api/api";
import { BlogPost } from "@/types/blog";

type BlogPostsResponse = PaginatedResponse<BlogPost> | ErrorResponse;
export const getBlogPosts = async (
  params?: PaginationParams,
): Promise<BlogPostsResponse> => {
  try {
    const searchParams = new URLSearchParams(params);
    const url = `${API_ENDPOINTS.POSTS}?${searchParams.toString()}`;
    const response = await axios.get(url);

    return {
      success: response.status === 200,
      ...response.data,
    };
  } catch (error) {
    console.error("Error fetching:", error);
    return {
      success: false,
    } as BlogPostsResponse;
  }
};
