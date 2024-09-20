import React, { useEffect, useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrolling(
        scrollPosition < currentScrollPos && currentScrollPos > 50
      );
      setScrollPosition(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light fixed-top ${
        isScrolling ? "scroll-hide" : "scroll-show"
      }`}
    >
      <div className="container">
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
          <div className="navbar-nav ms-auto">
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
