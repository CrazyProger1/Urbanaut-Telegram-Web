import { DEFAULT_IMAGES } from "../../constants/images.ts";

const Header = () => {
  return (
    <header className="flex flex-row bg-foreground rounded-b-2xl w-full p-2">
      <img
        className="size-16 rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0)] shadow-shadow-first/50"
        src={DEFAULT_IMAGES.user}
        alt="profile-image"
      />
      <div className="ml-2">
        <p className="text-text font-primary text-lg">username</p>
        <p className="text-text font-primary text-sm">smth</p>
      </div>
    </header>
  );
};

export default Header;
