import React, { Suspense } from "react";
import { ObjectSearchBar } from "@/components/modules/objects/bars";
import { AbandonedObjectCategory } from "@/types/categories";
import { getCategories } from "@/services/categories";

interface Props {
  categories: AbandonedObjectCategory[];
}

const SearchSection = async ({ categories }: Props) => {
  return (
    <Suspense>
      <ObjectSearchBar categories={categories} />
    </Suspense>
  );
};

export default SearchSection;
