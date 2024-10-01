// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./Home";
import Gestor from "./Pages/Gestor";
import Loguin from "./components/Loguin"; // Asegúrate de que el nombre es correcto
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gestor" element={<Gestor />} />
        <Route path="/loguin" element={<Loguin />} /> {/* Ruta para Loguin */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
