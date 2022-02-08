import React, { useState, createContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.scss";
import OurNavbar from "./components/OurNavbar";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import FindTrainerPage from "./pages/FindTrainerPage";
import BookingPage from "./pages/BookingPage";
import TrainerPage from "./pages/TrainerPage";
import LogoutPage from "./pages/LogoutPage";
import axios from "axios";

export const LoggedUserContext = createContext();
function App() {
  const [currentLoggedInUser, setCurrentLoggedInUser] = useState("null");
  useEffect(() => {
    if (localStorage.getItem("loggedUserId")) {
      axios
        .get(
          `http://localhost:4000/api/users/${JSON.parse(
            localStorage.getItem("loggedUserId")
          )}`
        )
        .then((userRes) => {
          setCurrentLoggedInUser(userRes.data.data);
        })
        .catch((err) => console.log(err));
    }
  }, []);
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
            <Route path="/bookingPage/:trainerId" element={<BookingPage />} />
            <Route path="/trainerPage/" element={<TrainerPage />} />
            <Route path="/logout" element={<LogoutPage />} />
          </Routes>
          <Footer />
        </LoggedUserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
