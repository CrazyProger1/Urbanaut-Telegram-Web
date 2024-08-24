import { BrowserRouter, Route, Routes } from "react-router-dom";
import ObjectsPage from "./components/pages/ObjectsPage.tsx";
import MainPage from "./components/pages/MainPage.tsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MainPage />} />
          <Route path="/objects" element={<ObjectsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
