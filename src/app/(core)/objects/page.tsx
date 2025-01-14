import {
  SearchSection,
  TableSection,
} from "@/components/modules/objects/sections";
import { AbandonedObject, AbandonedObjectFilters } from "@/types/objects";
import { getObjects } from "@/services/objects";
import { cookies } from "next/headers";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<AbandonedObjectFilters>;
};

const ObjectsPage = async (props: Props) => {
  let objects: AbandonedObject[] = [];
  const cookieStore = await cookies();
  const initDataRaw = cookieStore.get("initDataRaw");

  try {
    const objectsResponse = await getObjects(
      String(initDataRaw?.value),
      await props.searchParams,
    );
    if (objectsResponse.success) objects = objectsResponse.results;
  } catch (err) {
    console.log(err);
  }

  return (
    <>
      <SearchSection />
      {initDataRaw?.value}
      <div className="mt-4" />
      <TableSection objects={objects} />
    </>
  );
};

export default ObjectsPage;
