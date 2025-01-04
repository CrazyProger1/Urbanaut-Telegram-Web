import {
  SearchSection,
  TableSection,
} from "@/components/modules/objects/sections";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const ObjectsPage = async (props: Props) => {
  return (
    <>
      <SearchSection />

      <div className="mt-4" />
      <TableSection />
    </>
  );
};

export default ObjectsPage;
