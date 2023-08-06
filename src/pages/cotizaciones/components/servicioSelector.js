import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BotonCotizar from './BotonCotizar';
import BotonContactanos from './BotonContactanos';
import { ramasDerecho } from './ListaServicios'; // Importar directamente ramasDerecho

const ServicioSelector = () => {
  const [selectedServices, setSelectedServices] = useState([]);

  const handleServiceSelection = (service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const calcularPrecioTotal = (selectedServices) => {
    let total = 0;
    selectedServices.forEach((service) => {
      const rama = Object.keys(ramasDerecho).find((rama) =>
        ramasDerecho[rama].some((s) => s.nombre === service)
      );

      if (rama !== undefined && ramasDerecho[rama]) {
        const selectedService = ramasDerecho[rama].find((s) => s.nombre === service);
        if (selectedService) {
          total += selectedService.precio;
        }
      }
    });
    return total;
  };

  const getSelectedServicesInfo = () => {
    const selectedServiceInfo = selectedServices.map((service) => {
      const rama = Object.keys(ramasDerecho).find((rama) =>
        ramasDerecho[rama].some((s) => s.nombre === service)
      );

      if (rama !== undefined && ramasDerecho[rama]) {
        const selectedService = ramasDerecho[rama].find((s) => s.nombre === service);
        if (selectedService) {
          return `${selectedService.nombre}: $${selectedService.precio}`;
        }
      }
      return '';
    });
    const total = calcularPrecioTotal(selectedServices);
    return [selectedServiceInfo, total];
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-white text-center">Selecciona los tipos de servicio:</h2>
      <div className="grid sm:grid-cols-3 gap-4 ps-2">
        {Object.entries(ramasDerecho).map(([rama, servicios]) => (
          <div key={rama}>
            <h3 className="text-xl font-semibold text-white">{rama}</h3>
            <ul className="ml-6 list-disc text-white">
              {servicios.map((servicio) => (
                <li key={servicio.nombre}>
                  <label className='text-white'>
                    <input className='bg-pink-500 mr-3'
                      type="checkbox"
                      checked={selectedServices.includes(servicio.nombre)}
                      onChange={() => handleServiceSelection(servicio.nombre)}
                    />
                    {servicio.nombre}: ${servicio.precio}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <BotonCotizar selectedServices={selectedServices} getSelectedServicesInfo={getSelectedServicesInfo} />
      <BotonContactanos />
      <ToastContainer />
      <div>
        <p className='bg-blue-200 text-center'>Precio total: ${calcularPrecioTotal(selectedServices)}</p>
      </div>
    </div>
  );
};

export default ServicioSelector;




