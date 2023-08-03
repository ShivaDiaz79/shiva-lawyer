import React from "react";
import Gallery from "./Contenido/Gallery";
import SearchComponent from "./Search/SearchComponent";

const Hero = () => {
  return (
    <div className="relative text-white h-screen">
      <Gallery />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <SearchComponent />
      </div>

      <div>Hero</div>
    </div>
  );
};

export default Hero;
