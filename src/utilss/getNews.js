import axios from 'axios';

export const getNews = async () => {
  try {
    const apiKey = 'b869ea1db5c64947985bee6f54847a29'; // Reemplaza 'TU_API_KEY' con tu clave de API de News API
    const url = `https://newsapi.org/v2/everything?q=keyword&apiKey=${apiKey}`;
    const response = await axios.get(url);
    return response.data.articles;
  } catch (error) {
    console.error('Error al obtener los datos de la API:', error.message);
    return [];
  }
};
