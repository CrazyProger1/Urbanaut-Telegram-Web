import { ObjectSearchBar } from "@/components/bars";
import { ObjectTable } from "@/components/tables";

interface Props {
  searchParams: Promise<{ test: string }>;
}

const ObjectsPage = async ({ searchParams }: Props) => {
  console.log(await searchParams);
  return (
    <div>
      <ObjectSearchBar />
      <ObjectTable />
    </div>
  );
};

export default ObjectsPage;
