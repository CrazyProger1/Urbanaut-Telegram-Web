import { IMAGES } from "../../config/content.ts";

const ObjectSearchBar = () => {
  return (
    <div className="flex flex-row bg-foreground rounded-2xl">
      <div className="bg-foreground rounded-l-2xl p-2 w-full text-center text-text">
        Rating
      </div>
      <div className="bg-foreground p-2 w-full  text-center text-text">
        Difficulty
      </div>
      <div className="bg-foreground p-2 w-full  text-center text-text">
        Rating
      </div>
      <div className="bg-search-background rounded-r-2xl p-2 min-w-fit text-center text-text">
        <img className="size-9" src={IMAGES.search} alt=""/>
      </div>
    </div>
  );
};

export default ObjectSearchBar;
