import React, { useEffect, useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [isScrolling, setIsScrolling] = useState(false); // Detecta si está haciendo scroll
  const [scrollPosition, setScrollPosition] = useState(0); // Guarda la posición de scroll
  const [idleTimeout, setIdleTimeout] = useState(null); // Timeout para el estado inactivo
  const [isIdle, setIsIdle] = useState(false); // Estado inactivo (no está haciendo scroll)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Si está desplazándose hacia abajo
      if (scrollPosition < currentScrollPos && currentScrollPos > 50) {
        setIsScrolling(true);
        setIsIdle(false);
        clearTimeout(idleTimeout); // Limpia el timer cuando está haciendo scroll
      } else {
        setIsScrolling(false);
      }

      setScrollPosition(currentScrollPos);

      // Configura un timeout para activar el estado inactivo
      if (idleTimeout) clearTimeout(idleTimeout);
      const timeout = setTimeout(() => {
        setIsIdle(true);
      }, 1000); // 1 segundo de inactividad antes de mostrar el navbar de nuevo
      setIdleTimeout(timeout);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(idleTimeout); // Limpia el timeout cuando el componente se desmonta
    };
  }, [scrollPosition, idleTimeout]);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light fixed-top ${
        isIdle ? "scroll-show" : "scroll-hide"
      }`}
    >
      <div className="container-navBar">
        <a className="navbar-brand" href="/">
          <img
            src="https://res.cloudinary.com/dqgjcfosx/image/upload/v1725976604/APIDC-LOGO-01-121x121_qnzw4d.png"
            alt="Logo"
            width="60"
            height="60"
            className="d-inline-block align-top"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ms-auto"> {/* Clase ms-auto para alinear a la derecha */}
            <a className="nav-link" href="/">
              INICIO
            </a>
            <a className="nav-link" href="/asociarme">
              ASOCIARME
            </a>
            <a className="nav-link" href="/login">
              LOGIN
            </a>
            <a className="nav-link" href="/contacto">
              CONTACTO
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
