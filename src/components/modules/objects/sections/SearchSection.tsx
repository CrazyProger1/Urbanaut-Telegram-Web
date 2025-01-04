import React, { Suspense } from "react";
import { ObjectSearchBar } from "@/components/bars/searches";
import { AbandonedObjectCategory } from "@/types/categories";
import { getCategories } from "@/services/categories";

const SearchSection = async () => {
  let categories: AbandonedObjectCategory[] = [];
  try {
    const categoriesResponse = await getCategories();
    if (categoriesResponse.success) categories = categoriesResponse.results;
  } catch (err) {}

  return (
    <Suspense>
      <ObjectSearchBar categories={categories} />
    </Suspense>
  );
};

export default SearchSection;
