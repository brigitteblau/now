// src/components/DonationButtons.jsx
import React, { useState } from "react";
import Popup from "../shared/PopUp";
import "../../css/layout/donation.css";

const DonationButtons = () => {
  const [popupMessage, setPopupMessage] = useState(null);

  const handleOpenPopup = (message) => {
    setPopupMessage(message);
  };

  const handleClosePopup = () => {
    setPopupMessage(null);
  };

  return (
    <div className="donation">
      <div className="donation-buttons">
      
      <button
  className="button"
  onClick={() =>
    handleOpenPopup(`
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
          <p><b>Si vas a tomar una foto con el celular, tene en cuneta lo siguiente:</b></p>
          <ul>
            <li>Busca un lugar con buena iluminación, como cerca de una ventana o bajo una lámpara. Evita que la sombra de tu mano caiga sobre la hoja (usa luz de costado).</li>
            <li>Asegúrate de que la hoja ocupe la mayor parte de la foto.</li>
            <li>Evita ángulos pronunciados; es mejor tomar la foto de frente.</li>
            <li>No te preocupes por tus datos personales, ¡nos encargamos de borrarlos por completo!</li>
          </ul>
          <img src="/colaboracion.jpg" alt="Foto de muestra correcta e incorrecta" class="fotos-muestra" />
        </section>
      </div>
    `)
  }
>
COLABORAR
</button>
        <button
          className="button"
          onClick={() =>
            handleOpenPopup(`
              <h2">
                ¡Muchas gracias por tu apoyo, sin vos no sería lo mismo!
              </h2>
              <p>
                Podés hacerlo transfiriendo a nuestro alias: 
                <strong">proximamente/strong>. 
                ¡Tu aporte marca la diferencia!
              </p>
            `)
          }
        >
          DONAR
        </button>

        {popupMessage && <Popup message={popupMessage} onClose={handleClosePopup} />}
      </div>
    </div>
  );
};

export default DonationButtons;
