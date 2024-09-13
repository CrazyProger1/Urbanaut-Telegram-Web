import ObjectSearchBar from "@/components/bars/ObjectSearchBar";
import ObjectsTable from "@/components/tables/ObjectsTable";

const Home = () => {
  return (
    <main>
      <div className="mt-4" />
      <ObjectSearchBar />
      <div className="mt-4" />
      <ObjectsTable />
    </main>
  );
};

export default Home;
