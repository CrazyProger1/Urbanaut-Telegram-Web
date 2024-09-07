import { BrowserRouter, Route, Routes } from "react-router-dom";
import ObjectsPage from "./pages/ObjectsPage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import LeaderBoardPage from "./pages/LeaderBoardPage.tsx";
import LockedPage from "./pages/LockedPage.tsx";
import FriendsPage from "./pages/FriendsPage.tsx";
import EventsPage from "./pages/EventsPage.tsx";
import uiStore from "./stores/UIStore.ts";
import ObjectPage from "./pages/ObjectPage.tsx";

const App = () => (
  <div className={`${uiStore.currentTheme} min-h-screen flex flex-col`}>
    <BrowserRouter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<ObjectsPage />} />
        <Route path="/object/:id" element={<ObjectPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/leaderboard" element={<LeaderBoardPage />} />
        <Route path="/friends" element={<FriendsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/locked" element={<LockedPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
