// const express = require('express');
// const axios = require('axios');
// const cors = require('cors'); // Importa el módulo cors

// const app = express();
// const PORT = 5000;

// // Habilitar CORS para todas las solicitudes
// app.use(cors());

// app.get('/api/getNewsData', async (req, res) => {
//   const API_KEY = 'pub_27108e97d93c132ce1de7bfb5c040e44a39d3';
//   const url = `https://newsdata.io/api/1/news?country=bo&apikey=${API_KEY}`;

//   try {
//     const response = await axios.get(url);
//     res.json(response.data);
//   } catch (error) {
//     console.error('Error al obtener los datos de la API:', error);
//     res.status(500).json({ error: 'Error al obtener los datos de la API' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Servidor de backend escuchando en el puerto ${PORT}`);
// });


import React from 'react'

const server = () => {
  return (
    <div>server</div>
  )
}

export default server