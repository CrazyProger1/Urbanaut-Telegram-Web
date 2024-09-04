import PageBodyWrapper from "../wrappers/PageBodyWrapper.tsx";
import ObjectsTable from "../tables/ObjectsTable.tsx";
import objectsStore from "../../stores/ObjectsStore.ts";
import { observer } from "mobx-react";
import ObjectSearchBar from "../bars/ObjectSearchBar.tsx";

const ObjectsPage = observer(() => {
  return (
    <PageBodyWrapper>
      <div className="mt-4" />
      <ObjectSearchBar />
      <div className="mt-4" />
      <ObjectsTable objects={objectsStore.objects}></ObjectsTable>
    </PageBodyWrapper>
  );
});

export default ObjectsPage;
