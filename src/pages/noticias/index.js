import React, { useEffect, useState } from 'react';
import Layout from '../../../components/Layout';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

const Noticias = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await axios.get('/api/noticias');
        setNewsData(response.data);
      } catch (error) {
        console.error('Error al obtener los datos de la API:', error.message);
      }
    };

    fetchNewsData();
  }, []);

  return (
    <Layout>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 mx-2'>
        {Array.isArray(newsData) ? (
          newsData.map((news, index) => (
            <div key={index} className='bg-white border border-gray-300 rounded-lg p-4'>
              <h2 className='text-red-400 text-lg font-bold mb-2'>{news.title}</h2>
              <p className='text-gray-600 mb-4'>{news.description}</p>
              <p className='text-gray-800 font-bold'>{news.author}</p>
              <p className='text-gray-400 text-sm mb-2'>{news.publishedAt}</p>
              {/* Verifica si urlToImage existe antes de mostrar la imagen */}
              {news.urlToImage && (
                <Image src={news.urlToImage} alt='imagenApi' width={300} height={400} unoptimized className='mx-auto rounded-md' />
              )}
              {news.url && (
                <Link
                  className='bg-blue-500 text-white py-2 px-4 mt-4 block w-full text-center rounded-md'
                  href={news.url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Leer más
                </Link>
              )}
            </div>
          ))
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </Layout>
  );
};

export default Noticias;


