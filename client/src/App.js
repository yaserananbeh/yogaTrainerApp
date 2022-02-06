import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/App.scss";
import OurNavbar from "./components/OurNavbar";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="AppMainContainer">
      <BrowserRouter>
        <OurNavbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
