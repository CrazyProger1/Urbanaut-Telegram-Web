import { ErrorResponse, PaginatedResponse } from "@/types/api";
import { axios } from "@/services/api";
import { API_ENDPOINTS } from "@/constants/api";
import { Post } from "@/types/blog";

type PostsResponse = PaginatedResponse<Post> | ErrorResponse;
export const getPosts = async (): Promise<PostsResponse> => {
  const url = API_ENDPOINTS.posts;

  try {
    const response = await axios.get(url);

    return {
      success: response.status === 200,
      ...response.data,
    };
  } catch (error) {
    console.error("Error fetching:", error);
    return {
      success: false,
    } as PostsResponse;
  }
};
