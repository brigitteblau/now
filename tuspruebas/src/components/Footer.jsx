import React from "react";
import { Link } from "react-router-dom";
import "../css/layout/footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Empresa</h3>
          <ul>
            <li><Link to="/about">Sobre nosotros</Link></li>
            <li><Link to="/collaborate">Colaborar</Link></li>
            <li><Link to="/join">Ser parte</Link></li>
            <li><Link to="/doing-good">Haciendo el bien</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contacto y ayuda</h3>
          <ul>
            <li><Link to="/faq">Preguntas frecuentes</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Legal</h3>
          <ul>
            <li><Link to="/terms">Términos</Link></li>
            <li><Link to="/privacy-policy">Política de privacidad</Link></li>
            <li><Link to="/cookie-settings">Cookie Settings</Link></li>
            <li><Link to="/cookie-declaration">Declaración de Cookies</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Tus pruebas no está afiliado ni respaldado por ninguna escuela o colegio.
        </p>
        <p>Copyright © 2025, Buenos Aires, Argentina</p>
      </div>
    </footer>
  );
};

export default Footer;
