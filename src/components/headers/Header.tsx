import Link from "next/link";
import { LINKS } from "@/constants/links";
import { DEFAULT_IMAGES, IMAGES } from "@/constants/images";

const Header = () => (
  <div className="bg-secondary rounded-b-2xl p-2 pr-4 flex flex-row items-center">
    <Link href={LINKS.profile}>
      <img
        className="size-16 rounded-2xl"
        src={DEFAULT_IMAGES.user}
        alt="user-photo"
      />
    </Link>

    <div className="ml-2">
      <p className="text-text font-primary text-lg">username</p>
      <p className="text-text font-primary text-sm">smth</p>
    </div>
    <img
      className="size-12 ml-auto cursor-pointer"
      src={IMAGES.settings}
      alt="settings-icon"
    />
  </div>
);

export default Header;
