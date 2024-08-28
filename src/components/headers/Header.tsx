const Header = () => {
  return (
    <header className="bg-card rounded-b-2xl">
      <div className="w-full">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row m-4">
            <img
              className="rounded-2xl"
              src={new URL("/photo.jpg", import.meta.url).href}
              alt=""
              width="60px"
            />
            <div className="ml-4">
              <p className="text-lg text-copy-primary">username</p>
              <p className="text-sm  text-copy-primary">smth</p>
            </div>
          </div>

          <img
            className="m-4"
            src={new URL("/settings.png", import.meta.url).href}
            alt=""
            width="42px"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
