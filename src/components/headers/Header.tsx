import { DEFAULT_IMAGES, IMAGES } from "../../constants/images.ts";
import { Link } from "react-router-dom";
import uiStore from "../../stores/UIStore.ts";

const Header = () => {
  return (
    <header className="flex flex-row bg-foreground rounded-b-2xl w-full p-2">
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
        className="size-16 ml-auto"
        src={IMAGES.settings}
        alt="settings-image"
      />
    </header>
  );
};

export default Header;
