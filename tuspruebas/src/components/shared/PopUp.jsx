import React from 'react';
import "../../css/shared/popUp.css";
const Popup = ({ message, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content"> 
      <div className="close"> 
      <button className="close-button" onClick={onClose} aria-label="Cerrar">
          &times;
        </button>
        </div> 
      <div className="popup-message" dangerouslySetInnerHTML={{ __html: message }} />
      </div>
    </div>
  );
};

export default Popup;