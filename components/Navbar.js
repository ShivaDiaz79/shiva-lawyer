

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MenuPlegable from "./Plegable/MenuPlegable";
import MenuNavbar from "./MenuNavbar";

const Navbar = () => {
  const [menuDown, setMenuDown] = useState("");
  const [isMenuOpen, setMenuOpen] = useState(false);

  const abrirMenu = (name) => {
    if (name === menuDown) {
      setMenuDown("");
    } else {
      setMenuDown(name);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const NavItem = ({ href, text, onClick }) => (
    <Link href={href}
      
        onClick={onClick}
        className="text-white hover:text-white px-3 py-2 rounded-md text-xl font-saira font-medium flex items-center pr-5 mt-4 lg:inline-block lg:mt-0"
      >
        {text}
      
    </Link>
  );

  return (
    <nav className="bg-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                src="/Img/logo2.png"
                alt="Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <div id="menu" className="hidden ml-6 lg:flex lg:space-x-4">
              <NavItem href="/" text="SERVICIOS" onClick={() => abrirMenu("servicios")} />
              <NavItem href="/noticias" text="NOTICIAS" />
            </div>
          </div>
          <Link href="./shivaLawyer">
            <h1 className="text-center text-white hover:text-white font-orbitron pt-5">
              ABOGADO SHIVA DIAZ
            </h1>
          </Link>
          <div className="hidden items-center space-x-4 lg:flex">
            <NavItem href="/contacto" text="CONTACTO" />
            <NavItem href="/" text="LEGAL" onClick={() => abrirMenu("legal")} />
          </div>
          <div className="flex items-center -mr-2 lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-400 hover:text-white hover:bg-gray-700 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? "true" : "false"}
            >
              <span className="sr-only">Abrir menú</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? "block" : "hidden"} lg:hidden h-screen`} id="mobile-menu">
        <MenuNavbar />
      </div>
      <MenuPlegable menuDown={menuDown} />
    </nav>
  );
};

export default Navbar;
