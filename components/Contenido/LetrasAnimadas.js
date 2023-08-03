import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const LetrasAnimadas = ({
  title,
  paragraph,
  titleStyle = "",
  paragraphStyle = "",
  h1Color = "",
  paragraphColor = ""
}) => {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  let titleTyped;
  let paragraphTyped;

  useEffect(() => {
    const titleOptions = {
      strings: Array.isArray(title) ? title : [title],
      typeSpeed: 50,  // Ajusta este valor según tus necesidades
      backSpeed: 30,  // Ajusta este valor según tus necesidades
      loop: true,
      showCursor: true,
     cursorChar: '',
    };

    const paragraphOptions = {
      strings: Array.isArray(paragraph) ? paragraph : [paragraph],
      typeSpeed: 70,  // Ajusta este valor según tus necesidades
      backSpeed: 50,  // Ajusta este valor según tus necesidades
      loop: true,
      showCursor: true,
     cursorChar: '',
    };

    if (titleRef.current) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      titleTyped = new Typed(titleRef.current, titleOptions);
    }

    if (paragraphRef.current) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      paragraphTyped = new Typed(paragraphRef.current, paragraphOptions);
    }

    return () => {
      if (titleTyped) {
        titleTyped.destroy();
      }

      if (paragraphTyped) {
        paragraphTyped.destroy();
      }
    };
  }, [title, paragraph]);

  return (
    <div className="relative flex flex-col justify-center py-40 mx-4 sm:mx-10">
      <h1
        ref={titleRef}
        className={`${titleStyle} ${h1Color}`}
      ></h1>
      <p
        ref={paragraphRef}
        className={`${paragraphStyle} ${paragraphColor}`}
      ></p>
    </div>
  );
};

export default LetrasAnimadas;


