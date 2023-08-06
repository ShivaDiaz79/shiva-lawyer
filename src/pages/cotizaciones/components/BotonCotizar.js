import React from 'react';
import { toast } from 'react-toastify';
import Image from 'next/image';

const BotonCotizar = ({ selectedServices, getSelectedServicesInfo }) => {
  const handleCotizarClick = () => {
    const [selectedServiceInfo, total] = getSelectedServicesInfo();

    toast.info(
      <div>
        <Image src="/Img/martillo.jpg" alt="Imagen Aranceles" width={700} height={600} className="w-16 h-16 rounded-full mb-4" />
        <p className="text-lg font-semibold">Servicios Seleccionados:</p>
        <ul className="text-xl font-bold">
          {selectedServiceInfo.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
        <p className="text-lg font-semibold mt-2">Total a Pagar:</p>
        <p className="text-xl font-bold">${total}</p>
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
      className="fixed bottom-4 left-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      onClick={handleCotizarClick}
    >
      Cotizar
    </button>
  );
};

export default BotonCotizar;

