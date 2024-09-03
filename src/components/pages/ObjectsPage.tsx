import PageBodyWrapper from "../wrappers/PageBodyWrapper.tsx";
import { useState } from "react";
import SettingsModal from "../modals/SettingsModal.tsx";

const ObjectsPage = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <PageBodyWrapper>
      <button type="button" onClick={() => setShowModal(true)}>
        Open regular modal
      </button>

      <SettingsModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSave={() => setShowModal(false)}
      />
    </PageBodyWrapper>
  );
};

export default ObjectsPage;
