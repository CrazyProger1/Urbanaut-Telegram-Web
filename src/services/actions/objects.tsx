"use server";

import {
  AbandonedObjectsResponse,
  getAbandonedObjects,
} from "@/services/api/objects";
import { PaginationParams } from "@/types/api";

export const loadMoreAbandonedObjects = async (
  pagination?: PaginationParams,
): Promise<AbandonedObjectsResponse> => {
  return await getAbandonedObjects(pagination);
};
