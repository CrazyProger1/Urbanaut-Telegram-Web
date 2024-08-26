const Header = () => {
  return (
    <header className="bg-card rounded-b-2xl m-4">
      <div className="w-full">
        <img
          className="rounded-2xl"
          src={new URL("/photo.jpg", import.meta.url).href}
          alt=""
          width="50px"
        />
      </div>
    </header>
  );
};

export default Header;
