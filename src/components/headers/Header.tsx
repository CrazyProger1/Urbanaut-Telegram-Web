import { DEFAULT_IMAGES } from "../../constants/images.ts";

const Header = () => {
  return (
    <header className="bg-foreground rounded-b-2xl w-full p-2">
      <img
        className="size-16 rounded-2xl"
        src={DEFAULT_IMAGES.user}
        alt="profile-image"
      />
    </header>
  );
};

export default Header;
