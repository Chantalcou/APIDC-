import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./Home";
import Gestor from "./Pages/Gestor";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gestor" element={<Gestor />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
