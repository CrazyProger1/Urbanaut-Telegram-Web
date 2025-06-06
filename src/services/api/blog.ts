"use server";

import {
  ErrorResponse,
  PaginatedResponse,
  PaginationParams,
  SuccessfulResponse,
} from "@/types/api";
import { API_ENDPOINTS } from "@/config/api";
import { BlogPost } from "@/types/blog";
import { fetchExtended } from "@/services/api/api";

type BlogPostsResponse = PaginatedResponse<BlogPost> | ErrorResponse;
type BlogPostResponse = (BlogPost & SuccessfulResponse) | ErrorResponse;

export const getBlogPosts = async (
  params?: PaginationParams,
): Promise<BlogPostsResponse> => {
  try {
    const searchParams = new URLSearchParams(params);
    const url = `${API_ENDPOINTS.POSTS}?${searchParams.toString()}`;
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
    } as BlogPostsResponse;
  }
};

export const getBlogPost = async (id: number): Promise<BlogPostResponse> => {
  try {
    const url = API_ENDPOINTS.POST.replace(":id", String(id));
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
    } as BlogPostResponse;
  }
};
