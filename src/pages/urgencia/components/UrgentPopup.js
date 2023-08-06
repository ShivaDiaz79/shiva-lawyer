// components/UrgentPopup.js
import React, { useState } from 'react';

const UrgentPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleAccept = () => {
    // Aquí redireccionamos a tu número de WhatsApp
    window.location.href = 'https://wa.me/73665607';
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handleButtonClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Abrir Pop-up
      </button>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="bg-white w-64 p-4 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-2">¡Urgencia!</h2>
            <p>Esta es una situación de urgencia. ¿Deseas continuar?</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleAccept}
                className="mr-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Sí
              </button>
              <button
                onClick={handlePopupClose}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrgentPopup;

