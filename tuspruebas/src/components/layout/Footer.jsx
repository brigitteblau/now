import React, { useState } from "react"; // Import useState here
import { Link } from "react-router-dom";
import "../../css/layout/footer.css"; 
import Popup from "../shared/PopUp";

const Footer = () => {
  const [popupMessage, setPopupMessage] = useState(null);
  
  const handleOpenPopup = (message) => {
    setPopupMessage(message);
  };
  
  const handleClosePopup = () => {
    setPopupMessage(null);
  };

  const message = `
    <div class="popup-content">
      <h2>¡Gracias por tu intención de colaborar, lo valoramos muchísimo!</h2>
      <p>
        Envíanos un correo a 
        <a href="mailto:manda.tuspruebas@gmail.com">
          manda.tuspruebas@gmail.com
        </a> 
        con tu prueba, tp y resumen. Nos ayudas enormemente. Si puedes incluir el profesor, el año, o cualquier dato extra, ¡sería ideal!
      </p>
      <section class="foto-celular">
        <p><b>Si vas a tomar una foto con el celular, tene en cuenta lo siguiente:</b></p>
        <ul>
          <li>Busca un lugar con buena iluminación, como cerca de una ventana o bajo una lámpara. Evita que la sombra de tu mano caiga sobre la hoja (usa luz de costado).</li>
          <li>Asegúrate de que la hoja ocupe la mayor parte de la foto.</li>
          <li>Evita ángulos pronunciados; es mejor tomar la foto de frente.</li>
          <li>No te preocupes por tus datos personales, ¡nos encargamos de borrarlos por completo!</li>
        </ul>
        <img src="/colaboracion.jpg" alt="Foto de muestra correcta e incorrecta" class="fotos-muestra" />
      </section>
    </div>
  `;

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Empresa</h3>
          <ul>
            <li><Link to="/about">Sobre nosotros</Link></li>
            <li>
              <button className="foot-button"
                onClick={() => handleOpenPopup(message)}
              >
                Colaborar
              </button>
            </li>
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

      {popupMessage && (
        <Popup message={popupMessage} onClose={handleClosePopup} />
      )}
    </footer>
  );
};

export default Footer;
