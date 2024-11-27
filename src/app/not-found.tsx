import { ICONS } from "@/constants/media";

const NotFound = () => {
  return (
    <div className="relative flex min-h-96 items-center justify-center rounded-2xl my-4">
      <div className="absolute inset-0 bg-secondary blur-sm rounded-2xl"></div>
      <img
        src={ICONS.notfound}
        className="relative z-10 size-14"
        alt="not-found"
      ></img>
    </div>
  );
};

export default NotFound;
