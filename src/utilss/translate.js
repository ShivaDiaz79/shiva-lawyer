// // utils/translate.js

// // Importa el cliente de Google Cloud Translation solo si está en el entorno de Node.js (servidor)
// const isServer = typeof window === 'undefined';
// let TranslateToSpanish;
// if (isServer) {
//   const { Translate } = require('@google-cloud/translate').v2;

//   // Crea una instancia del cliente de Google Cloud Translation
//   const translateClient = new Translate({
//     keyFilename: 'ruta/a/tu/archivo-de-credenciales-de-google.json', // Reemplaza con la ruta a tu archivo de credenciales de Google Cloud Translation
//   });

//   // Función para traducir texto de inglés a español
//   TranslateToSpanish = async (text) => {
//     try {
//       const [translation] = await translateClient.translate(text, 'es');
//       return translation;
//     } catch (error) {
//       console.error('Error al traducir el texto:', error.message);
//       return text; // Si hay un error, devuelve el texto original sin traducir
//     }
//   };
// }

// export default TranslateToSpanish;


import React from 'react'

const translate = () => {
  return (
    <div>translate</div>
  )
}

export default translate