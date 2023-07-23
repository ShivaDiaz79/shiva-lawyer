import React, { useState } from 'react';

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Agrega aquí la lógica para realizar la búsqueda y redireccionar a la página de resultados
    console.log('Realizar búsqueda con el término:', searchQuery);
    // Ejemplo de redirección a la página de resultados (reemplaza con tu lógica real)
    window.location.href = `/resultados?query=${searchQuery}`;
  };

  return (
    <form className="flex items-center" onSubmit={handleSearch}>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="px-4 py-2 rounded-l-lg border border-r-0 focus:outline-none focus:border-blue-500 text-black"
        placeholder="Buscar..."
      />
      <button
        type="submit"
        className="px-4 py-2 bg-gray-800 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none font-orbitron"
      >
        Buscar
      </button>
    </form>
  );
};

export default SearchComponent;

