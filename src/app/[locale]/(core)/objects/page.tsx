import {
  SearchSection,
  TableSection,
} from "@/components/modules/objects/sections";
import { AbandonedObject, AbandonedObjectFilters } from "@/types/objects";
import { getObjects } from "@/services/objects";
import { AbandonedObjectCategory } from "@/types/categories";
import { getCategories } from "@/services/categories";
import { getInitDataCookie } from "@/telegram/utils/server";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<AbandonedObjectFilters>;
};

const ObjectsPage = async ({ params, searchParams }: Props) => {
  let objects: AbandonedObject[] = [];
  let categories: AbandonedObjectCategory[] = [];

  const { initDataRaw } = await getInitDataCookie();

  try {
    if (initDataRaw) {
      const objectsResponse = await getObjects(
        initDataRaw,
        await searchParams,
        (await params).locale,
      );
      if (objectsResponse.success) objects = objectsResponse.results;
    }
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
