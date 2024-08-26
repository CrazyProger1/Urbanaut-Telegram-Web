const Header = () => {
  return (
    <header className="bg-card rounded-b-2xl m-4">
      <div className="w-full">
        <div className="flex flex-row items-center justify-between">
          <div className="m-3">
            <img
              className="rounded-2xl"
              src={new URL("/photo.jpg", import.meta.url).href}
              alt=""
              width="50px"
            />
          </div>

          <img
            className="m-3"
            src={new URL("/settings.png", import.meta.url).href}
            alt=""
            width="32px"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
