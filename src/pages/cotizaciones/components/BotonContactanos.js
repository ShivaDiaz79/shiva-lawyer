import React from 'react';
import { toast } from 'react-toastify';

const BotonContactanos = () => {
  const handleContactanosClick = () => {
    toast.info(
      <div>
        <p>Contáctanos a través de WhatsApp al número 73665607</p>
      </div>,
      {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      }
    );
  };

  return (
    <button
      className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ms-20"
      onClick={handleContactanosClick}
    >
      Contáctanos (WhatsApp)
    </button>
  );
};

export default BotonContactanos;
