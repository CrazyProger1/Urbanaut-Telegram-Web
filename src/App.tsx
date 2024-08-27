import { BrowserRouter, Route, Routes } from "react-router-dom";
import ObjectsPage from "./components/pages/ObjectsPage.tsx";
import MainPage from "./components/pages/MainPage.tsx";
import ProfilePage from "./components/pages/ProfilePage.tsx";
import LeaderBoardPage from "./components/pages/LeaderBoardPage.tsx";
import LockedPage from "./components/pages/LockedPage.tsx";
import FriendsPage from "./components/pages/FriendsPage.tsx";
import EventsPage from "./components/pages/EventsPage.tsx";

const App = () => {
  return (
    <div className="dark">
      <BrowserRouter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MainPage />} />
          <Route path="/objects" element={<ObjectsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/leaderboard" element={<LeaderBoardPage />} />
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/locked" element={<LockedPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
