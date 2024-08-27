import PageBodyWrapper from "../wrappers/PageBodyWrapper.tsx";
import ObjectsTable from "../tables/ObjectsTable.tsx";
import ObjectsStore from "../../stores/ObjectsStore.ts";

const ObjectsPage = () => {
  return (
    <PageBodyWrapper>
        <ObjectsTable objects={ObjectsStore.objects} />
    </PageBodyWrapper>
  );
};

export default ObjectsPage;
