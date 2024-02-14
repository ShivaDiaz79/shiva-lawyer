import React from 'react';
import { toast } from 'react-toastify';

const BotonContactanos = () => {
  const handleContactanosClick = () => {
    toast.info(
      <div className='bg-orange-500'>
        <p className='text-white  font-orbitron p-10 font-bold'>Contáctanos a través de WhatsApp al número 73665607</p>
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
    <div className='flex justify-center items-center m-5'>
    <button
      className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-center"
      onClick={handleContactanosClick}
    >
      Contáctanos (WhatsApp)
    </button>
    </div>
  );
};

export default BotonContactanos;
