import {
  SearchSection,
  TableSection,
} from "@/components/modules/objects/sections";
import { AbandonedObject, AbandonedObjectFilters } from "@/types/objects";
import { getObjects } from "@/services/objects";
import { AbandonedObjectCategory } from "@/types/categories";
import { getCategories } from "@/services/categories";

type Props = {
  searchParams: Promise<AbandonedObjectFilters>;
};

const ObjectsPage = async ({ searchParams }: Props) => {
  let objects: AbandonedObject[] = [];
  let categories: AbandonedObjectCategory[] = [];

  try {
    const objectsResponse = await getObjects(await searchParams);
    if (objectsResponse.success) objects = objectsResponse.results;
  } catch (err) {
    console.log(err);
  }

  try {
    const categoriesResponse = await getCategories();
    if (categoriesResponse.success) categories = categoriesResponse.results;
  } catch (err) {
    console.log(err);
  }

  return (
    <>
      <SearchSection categories={categories} />
      <div className="mt-4" />
      <TableSection objects={objects} />
    </>
  );
};

export default ObjectsPage;
