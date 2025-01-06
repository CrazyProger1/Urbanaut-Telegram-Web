import React, { Suspense } from "react";
import { ObjectSearchBar } from "@/components/modules/objects/bars";
import { AbandonedObjectCategory } from "@/types/categories";
import { getCategories } from "@/services/categories";

const SearchSection = async () => {
  let categories: AbandonedObjectCategory[] = [];
  try {
    const categoriesResponse = await getCategories();
    if (categoriesResponse.success) categories = categoriesResponse.results;
  } catch (err) {
    console.log(err);
  }

  return (
    <Suspense>
      <ObjectSearchBar categories={categories} />
    </Suspense>
  );
};

export default SearchSection;
