import { ObjectSearchBar } from "@/components/bars/searches";
import { ObjectTable } from "@/components/tables";
import { Suspense } from "react";
import { getObjects } from "@/services/objects";
import { AbandonedObject } from "@/types/objects";
import { getCategories } from "@/services/categories";
import { AbandonedObjectCategory } from "@/types/categories";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const ObjectsPage = async (props: Props) => {
  const objectsResponse = await getObjects();
  const categoriesResponse = await getCategories();

  let objects: AbandonedObject[] = [];
  let categories: AbandonedObjectCategory[] = [];

  if (objectsResponse.success) objects = objectsResponse.results;
  if (categoriesResponse.success) categories = categoriesResponse.results;

  return (
    <div>
      <Suspense>
        <ObjectSearchBar categories={categories} />
      </Suspense>

      <ObjectTable objects={objects} />
    </div>
  );
};

export default ObjectsPage;
