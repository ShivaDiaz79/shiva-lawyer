import React, { useState } from 'react';

const Tratamientos = [
  {
    title: 'Faciales',
    descriptions: [
      {
        description: 'Fox Eyes',
        link: 'FoxEyes',
      },
      {
        description: 'Liposonix',
        link: 'Liposonix',
      },
      {
        description: 'Hilos PDO ',
        link: 'HilosPdo',
      },
      {
        description: 'Adiós Acne',
        link: 'AdiosAcne',
      },
      {
        description: 'Microblading',
        link: 'MicroBlading',
      },
    
    ],
  },
  {
    title: 'Corporales ',
    descriptions: [
      {
        description: 'Hifu',
        link: 'Hifu',
      },
      {
        description: 'Radiesse',
        link: 'Radiesse',
      },
      {
        description: 'Sculptra',
        link: 'Sculptra',
      },
      {
        description: 'Hilos PDO',
        link: 'Hilos',
      },
      {
        description: 'Gel Plasma',
        link: 'GelPlasma',
      },
      {
        description: 'Liposonic',
        link: 'Liposonic',
      },
      {
        description: 'Adios Celulitis',
        link: 'AdiosCelulitis',
      },
      {
        description: 'Adios Estrias',
        link: 'AdiosEstrias',
      },
      {
        description: 'Adios Lunares',
        link: 'AdiosLunares',
      },
      {
        description: 'Lipo sin Cirugia',
        link: 'LiposinCirugia',
      },
      {
        description: 'Gluteos Perfectos',
        link: 'GluteosPerfectos',
      },
      {
        description: 'Musculación Flash',
        link: 'MusculacionFlash',
      },
      {
        description: 'Eliminación de Tatuajes',
        link: 'EliminaciondeTatuajes',
      },
    ],
  },
  

];

const MenuFlotante = () => {
  const [selectedTreatment, setSelectedTreatment] = useState(null);

  const handleDescriptionClick = (link) => {
    window.location.href = `/tratamientopage?component=${link}`;
  };

  const handleClick = (index) => {
    setSelectedTreatment(selectedTreatment === index ? null : index);
  };

  return (
    <div className="text-base text-black dark:text-white font-relaway font-light ">
      {Tratamientos.map((Tratamiento, index) => (
        <div key={index} className="mt-2">
          <div
            onClick={() => handleClick(index)}
            className="py-3 rounded-lg cursor-pointer md:w-60 lg:w-60 xl:w-60 text-center hover:uppercase"
          >
            <div className="font-semibold">{Tratamiento.title}</div>
          </div>
          {selectedTreatment === index && (
            <div className="mt-2 ">
              {Tratamiento.descriptions.map((desc, descIndex) => (
                <div
                  key={descIndex}
                  onClick={() => handleDescriptionClick(desc.link)}
                  className="cursor-pointer text-black text-sm font-semibold ps-2 hover:underline"
                >
                  {desc.description}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MenuFlotante;