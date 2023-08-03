import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedTextWithColorChange = ({ texts }) => {
  const typedRef = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: texts.map((text) => text.content),
      typeSpeed: 100,
      loop: true,
      showCursor: true,
      cursorChar: '',
      preStringTyped: (arrayPos, self) => {
        // Seleccionar un color aleatorio para cada iteración
        const randomColor = getRandomColor();
        // Aplicar el color directamente al elemento del texto en la animación
        self.el.classList.add(randomColor);
      },
    };

    if (typedRef.current) {
      typed.current = new Typed(typedRef.current, options);
    }

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, [texts]);

  // Función para obtener un color aleatorio
  const getRandomColor = () => {
    const colors = ['text-red-500', 'text-yellow-500', 'text-green-500'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div>
      <p ref={typedRef} className="text-lg font-bold font-orbitron"></p>
    </div>
  );
};

export default TypedTextWithColorChange;

