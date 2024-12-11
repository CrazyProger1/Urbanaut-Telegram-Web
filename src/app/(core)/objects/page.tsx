import { ObjectSearchBar } from "@/components/bars/searches";
import { ObjectTable } from "@/components/tables";
import { Suspense } from "react";
import { getObjects } from "@/services/objects";
import { AbandonedObject } from "@/types/objects";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const ObjectsPage = async (props: Props) => {
  console.log(props);

  const response = await getObjects();

  let objects: AbandonedObject[] = [];

  if (response.success) objects = response.results;

  return (
    <div>
      <Suspense>
        <ObjectSearchBar />
      </Suspense>

      <ObjectTable objects={objects} />
    </div>
  );
};

export default ObjectsPage;
