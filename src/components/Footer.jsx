import React from 'react';
import './path/to/your/custom.css'; // Asegúrate de ajustar la ruta a tu archivo CSS

const Footer = () => {
  return (
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
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> |
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
