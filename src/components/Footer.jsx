// Footer.js
import React, { useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const footer = document.querySelector(".footer");
          if (entry.isIntersecting) {
            footer.classList.add("show");
          } else {
            footer.classList.remove("show");
          }
        });
      },
      { threshold: 1.0 } // Se activa cuando el sentinel es completamente visible
    );

    const sentinel = document.querySelector("#sentinel");
    if (sentinel) {
      observer.observe(sentinel);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <p>© 2024 Tu Empresa. Todos los derechos reservados.</p>
          </div>
          <div className="footer-section">
            <a href="mailto:contacto@tuempresa.com">Contacto</a> |
            <a href="/privacy-policy">Política de Privacidad</a> |
            <a href="/terms-of-service">Términos de Servicio</a>
          </div>
          <div className="footer-section">
            <p>Seguínos en:</p>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>{" "}
            |
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>{" "}
            |
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </footer>

      {/* Sentinel es el último elemento que vamos a observar */}
      <div id="sentinel" style={{ height: "1px" }}></div>
    </>
  );
};

export default Footer;
