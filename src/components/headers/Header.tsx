import { DEFAULT_IMAGES, IMAGES } from "../../constants/images.ts";
import { Link } from "react-router-dom";
import uiStore from "../../stores/UIStore.ts";
import { useState } from "react";
import SettingsModal from "../modals/SettingsModal.tsx";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="flex flex-row bg-foreground rounded-b-2xl w-full p-2 pr-4 items-center">
      <Link to="/profile" onClick={() => uiStore.setPage("/profile")}>
        <img
          className="size-16 rounded-2xl shadow-frame shadow-shadow-first/50"
          src={DEFAULT_IMAGES.user}
          alt="profile-image"
        />
      </Link>

      <div className="ml-2">
        <p className="text-text font-primary text-lg">username</p>
        <p className="text-text font-primary text-sm">smth</p>
      </div>

      <img
        className="size-12 ml-auto cursor-pointer"
        src={IMAGES.settings}
        alt="settings-image"
        onClick={() => setShowModal(true)}
      />
      <SettingsModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSave={() => setShowModal(false)}
      />
    </header>
  );
};

export default Header;
