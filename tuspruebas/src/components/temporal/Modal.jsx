import React, { useState } from 'react';
import './modal.css'; // Asegúrate de agregar un archivo CSS para los estilos

const Modal = () => {
  const [isOpen, setIsOpen] = useState(true); // Mantiene el estado de si el modal está abierto o cerrado

  const closeModal = () => {
    setIsOpen(false); // Cierra el modal
  };

  const handleWhatsAppRedirect = () => {
    // Este es el enlace de invitación al grupo
    const groupLink = "https://chat.whatsapp.com/GS88Qr7YZXZ4gBqAF22rs2"; 
    window.open(groupLink, '_blank'); 
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <h2>¡Compremos todo juntos Chat GPT!</h2>
        <p>
Si queres unirte solo presiona el botón de abajo donde nos vamos a estar organizando.
        </p>
        
        <button className="whatsapp-btn" onClick={handleWhatsAppRedirect}>
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Logo" />
  Unirme al grupo de WhatsApp
</button>
        <p> ¡Apurate! <br/> La fecha límite es el <strong>15 de Abril</strong></p>
        <button className="close-btn" onClick={closeModal}>Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;
