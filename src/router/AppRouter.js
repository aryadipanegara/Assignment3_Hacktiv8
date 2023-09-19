import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Interest from "../components/Interest";
import Awards from "../components/Awards";
import Footer from "../components/Footer";

function AppRouter() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Interest" element={<Interest />} />
        <Route path="/Awards" element={<Awards />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;
