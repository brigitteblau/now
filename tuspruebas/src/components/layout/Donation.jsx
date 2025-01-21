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
      <button className="button"
        onClick={() =>
          handleOpenPopup(`
            <h2 style="color: #007bff; font-size: 1.5em; margin-bottom: 10px;">
              ¡Gracias por tu intencion de colaborar, lo apreciamos muchisimo!
            </h2>
            <p>
              Envíanos un mail a 
              <a href="mailto:manda.tuspruebas@gmail.com" style="color: #007bff; text-decoration: underline;">
                manda.tuspruebas@gmail.com
              </a> 
              con tu trabajo o prueba. Nos ayudas muchísimo. Si especificas el profesor, ¡sería ideal!
            </p>
          `)
        }
      >
        Colaborá con material de estudio
      </button>

              <button className="button"
        onClick={() =>
          handleOpenPopup(`
            <h2 style="color: #007bff; font-size: 1.5em; margin-bottom: 10px;">
              ¡Muchas gracias por tu apoyo, sin vos no seria lo msimo!
            </h2>
            <p>
              Podés hacerlo transfiriendo a nuestro alias: 
              <strong style="color: #28a745;">aliasdona.pruebas</strong>. 
              ¡Tu aporte marca la diferencia!
            </p>
          `)
        }
      >
        DONÁ
      </button>

      {popupMessage && <Popup message={popupMessage} onClose={handleClosePopup} />}
    </div>
    </div>
  );
};

export default DonationButtons;
