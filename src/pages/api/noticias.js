import { getNews } from "../../utilss/getNews";

export default async function handler(req, res) {
  try {
    const newsData = await getNews();
    res.status(200).json(newsData);
  } catch (error) {
    console.error('Error al obtener los datos de la API:', error.message);
    res.status(500).json({ error: 'Error al obtener los datos de la API' });
  }
}
