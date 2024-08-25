import { Link } from "react-router-dom";

const FooterNavbar = () => {
  const starUrl = new URL("/star.png", import.meta.url).href;
  const calendarUrl = new URL("/calendar.png", import.meta.url).href;
  const profileUrl = new URL("/profile.png", import.meta.url).href;
  const searchUrl = new URL("/search.png", import.meta.url).href;
  const agendaUrl = new URL("/agenda.png", import.meta.url).href;
  return (
    <div className="flex justify-around">
      <Link
        className="flex flex-col items-center text-white text-base mob2:text-lg p-1 mob2:p-0.5 active:bg-main active:ring-1 active:ring-gray-400 focus:ring-1 focus:ring-gray-400 rounded-lg"
        to={"/top"}
      >
        <img src={starUrl} alt="test" width="52px"></img>
      </Link>
      <Link
        className="flex flex-col items-center text-white text-base mob2:text-lg p-1 mob2:p-0.5 active:bg-main active:ring-1 active:ring-gray-400 focus:ring-1 focus:ring-gray-400 rounded-lg"
        to={"/friends"}
      >
        <img src={profileUrl} alt="test" width="52px"></img>
      </Link>
      <Link
        className="flex flex-col items-center text-white text-base mob2:text-lg p-1 mob2:p-0.5 active:bg-main active:ring-1 active:ring-gray-400 focus:ring-1 focus:ring-gray-400 rounded-lg"
        to={"/"}
      >
        <img src={searchUrl} alt="test" width="52px"></img>
      </Link>
      <Link
        className="flex flex-col items-center text-white text-base mob2:text-lg p-1 mob2:p-0.5 active:bg-main active:ring-1 active:ring-gray-400 focus:ring-1 focus:ring-gray-400 rounded-lg"
        to={"/tasks"}
      >
        <img src={agendaUrl} alt="test" width="52px"></img>
      </Link>
      <Link
        className="flex flex-col items-center text-white text-base mob2:text-lg p-1 mob2:p-0.5 active:bg-main active:ring-1 active:ring-gray-400 focus:ring-1 focus:ring-gray-400 rounded-lg"
        to={"/shop"}
      >
        <img src={calendarUrl} alt="test" width="52px"></img>
      </Link>
    </div>
  );
};

export default FooterNavbar;
