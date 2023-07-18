import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Gallery = () => {
  const images = [
    {
      src: '/Img/logo2.png',
      title: 'Foto 1',
    },
    {
      src: '/Img/logo.png',
      title: 'Foto 2',
    },
    // Agregar más imágenes y títulos según tus necesidades
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="relative w-full h-full">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg mb-4"
        />
      </div>
      <h2 className="text-2xl font-bold mb-2">{images[currentIndex].title}</h2>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Gallery;

