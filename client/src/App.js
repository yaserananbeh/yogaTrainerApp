import React, { useState, createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.scss";
import OurNavbar from "./components/OurNavbar";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import FindTrainerPage from "./pages/FindTrainerPage";

export const LoggedUserContext = createContext();
function App() {
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState("test");
  return (
    <div className="AppMainContainer">
      <BrowserRouter>
        <LoggedUserContext.Provider
          value={{ currentLoggedInUser, setCurrentLoggedInUser }}
        >
          <OurNavbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/findTrainer" element={<FindTrainerPage />} />
          </Routes>
          <Footer />
        </LoggedUserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
