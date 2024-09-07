import PageBodyWrapper from "../components/wrappers/PageBodyWrapper.tsx";
import ObjectsTable from "../components/tables/ObjectsTable.tsx";
import objectsStore from "../stores/ObjectsStore.ts";
import { observer } from "mobx-react";
import ObjectSearchBar from "../components/bars/ObjectSearchBar.tsx";
import { AbandonedObject } from "../types/objects.ts";
import { useCustomNavigate } from "../hooks/useCustomNavigate.tsx";

const ObjectsPage = observer(() => {
  const navigate = useCustomNavigate();
  const handleObjectChosen = (obj: AbandonedObject) => {
    navigate(`object/${obj.id}`);
  };
  return (
    <PageBodyWrapper>
      <div className="mt-4" />
      <ObjectSearchBar />
      <div className="mt-4" />
      <ObjectsTable
        objects={objectsStore.objects}
        onChoose={handleObjectChosen}
      ></ObjectsTable>
    </PageBodyWrapper>
  );
});

export default ObjectsPage;
