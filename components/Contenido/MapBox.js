import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

const MapBox = ({ lat, lng, zoom }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current === null) {
      const L = require('leaflet');
      const map = L.map('map').setView([lat, lng], zoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(map);

      const coord = [lat, lng];
      const marker = L.marker(coord).addTo(map);

      // Agregar una imagen en el marcador
      marker.bindPopup(`<img src="/Img/edificio.jpg" alt="Edificio" />`);

      marker.on('click', () => {
        window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`);
      });

      mapRef.current = map;
    }
  }, [lat, lng, zoom]);

  return <div id='map' className='h-80 w-full'></div>;
};

export default MapBox;


