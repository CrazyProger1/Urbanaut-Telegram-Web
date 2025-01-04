import React, { Suspense } from "react";
import { ObjectSearchBar } from "@/components/bars/searches";
import { AbandonedObjectCategory } from "@/types/categories";
import { getCategories } from "@/services/categories";

const SearchSection = async () => {
  const categoriesResponse = await getCategories();
  let categories: AbandonedObjectCategory[] = [];
  if (categoriesResponse.success) categories = categoriesResponse.results;
  return (
      <Suspense>
        <ObjectSearchBar categories={categories} />
      </Suspense>
  );
};

export default SearchSection;
