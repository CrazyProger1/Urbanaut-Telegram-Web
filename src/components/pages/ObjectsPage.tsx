import PageBodyWrapper from "../wrappers/PageBodyWrapper.tsx";
import ObjectsTable from "../tables/ObjectsTable.tsx";
import ObjectsStore from "../../stores/ObjectsStore.ts";

const ObjectsPage = () => {
  return (
    <PageBodyWrapper>
      <div className="m-4">
        <ObjectsTable objects={ObjectsStore.objects} />
      </div>
    </PageBodyWrapper>
  );
};

export default ObjectsPage;
