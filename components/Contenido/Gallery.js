import React, { useState, useEffect } from "react";
import Image from "next/image";

const Gallery = () => {
  const images = [
    {
      src: "/Img/justicia.jpg",
      title: "Foto 0",
    },
    {
      src: "/Img/justicia1.jpg",
      title: "Foto 1",
    },
    {
      src: "/Img/justicia2.jpg",
      title: "Foto 2",
    },
    {
      src: "/Img/justicia3.jpg",
      title: "Foto 3",
    },
    {
      src: "/Img/justicia4.jpg",
      title: "Foto 4",
    },

    {
      src: "/Img/justicia6.jpg",
      title: "Foto 6",
    },

    // Agregar más imágenes y títulos según tus necesidades
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]); // Agregamos images.length como dependencia del useEffect

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="relative w-full h-full">
      <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].title}
          width={1600}
          height={800}
          className="object-cover w-full h-full rounded-lg shadow-lg mb-4 sm:pt-10" // Utilizar la clase object-cover para que la imagen cubra el contenedor
        />
      </div>
      <h2 className="text-2xl font-bold mb-2">{images[currentIndex].title}</h2>
      <button
        className="px-4 py-2 bg-black text-white rounded-lg shadow-md hover:bg-blue-600 transition"
        onClick={() =>
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }
      >
        apretar para ver mas
      </button>
    </div>
  );
};
export default Gallery;
