import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/landingPage";
import Header from "./components/Header";
import { useState } from "react";
import HomePage from "./components/homePage";
import SpacePage from "./components/spacePage";
import ExplorePage from "./components/explorePage";
import NearPage from "./components/nearPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check if the current route is the landing page
  const isLandingPage = window.location.pathname === '/';

  return (
    <>
      <div>
        {!isLandingPage && <Header />}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/space" element={<SpacePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/near" element={<NearPage />} />
          {/* <Route path="*" element={<LandingPage />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;