import {
  SearchSection,
  TableSection,
} from "@/components/modules/objects/sections";
import { AbandonedObjectFilters } from "@/types/objects";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<AbandonedObjectFilters>;
};


const ObjectsPage = async (props: Props) => {
  return (
    <>
      <SearchSection />

      <div className="mt-4" />
      <TableSection filters={await props.searchParams} />
    </>
  );
};

export default ObjectsPage;
