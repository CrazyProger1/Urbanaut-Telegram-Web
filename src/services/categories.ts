import { ErrorResponse, PaginatedResponse } from "@/types/api";
import { AbandonedObjectCategory } from "@/types/categories";
import { axios } from "@/services/api";
import { API_ENDPOINTS } from "@/constants/api";

type CategoriesResponse =
  | PaginatedResponse<AbandonedObjectCategory>
  | ErrorResponse;
export const getCategories = async (): Promise<CategoriesResponse> => {
  const url = API_ENDPOINTS.categories;

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
    } as CategoriesResponse;
  }
};
