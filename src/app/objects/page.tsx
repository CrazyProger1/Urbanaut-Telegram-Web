import ObjectSearchBar from "@/components/bars/ObjectSearchBar";
import ObjectsTable from "@/components/tables/ObjectsTable";

const ObjectsPage = async () => {
  let data = await fetch("http://localhost:8001/api/v1/objects/");
  let paginated = await data.json();
  return (
    <main>
      <div className="mt-4" />
      <ObjectSearchBar />
      <div className="mt-4" />
      <ObjectsTable objects={paginated.results} />
    </main>
  );
};

export default ObjectsPage;
