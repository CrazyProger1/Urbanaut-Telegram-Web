import { API_URL } from "@/config/urls";
import { ErrorResponse, PaginatedResponse } from "@/types/api";
import { AbandonedObjectCategory } from "@/types/categories";

type CategoriesResponse =
  | PaginatedResponse<AbandonedObjectCategory>
  | ErrorResponse;
export const getCategories = async (): Promise<CategoriesResponse> => {
  const response = await fetch(`${API_URL}/categories/toplevel/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 120,
    },
  });
  const data = await response.json();

  return {
    success: response.ok,
    ...data,
  };
};
