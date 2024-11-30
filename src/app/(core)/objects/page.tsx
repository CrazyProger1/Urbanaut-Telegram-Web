import { ObjectSearchBar } from "@/components/bars";
import { ObjectTable } from "@/components/tables";

interface ObjectPageProps {
  searchParams: Promise<{ test: string }>;
}

const ObjectsPage = async ({ searchParams }: ObjectPageProps) => {
  console.log(await searchParams);
  return (
    <div>
      <ObjectSearchBar />
      <ObjectTable />
    </div>
  );
};

export default ObjectsPage;
