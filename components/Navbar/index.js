'use client'
import React, { useState } from "react";
import Flechita from "./Flechita";
import MenuFlotante from "./MenuFlotante";
import Link from "next/link";
import { motion } from "framer-motion";

const Index = () => {
  const NUM_DROPDOWNS = 1;
  const [dropdownStates, setDropdownStates] = useState(Array(NUM_DROPDOWNS).fill(false));
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (index) => {
    setDropdownStates((prevState) =>
      prevState.map((value, i) => (i === index ? !value : false))
    );
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setDropdownStates(Array(NUM_DROPDOWNS).fill(false));
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="h-0 xl:pt-10 z-30 text-xl sm-text-xl lg-text-sm xl:text-2xl font-calabacin  w-full " >
      <div
        className={`md:flex   xl:h-20 xl:pt-4 ${
          isMobileMenuOpen ? "bg-customColor text-white " : ""
        } h-14`}
      >
        <button
          onClick={toggleMobileMenu}
          className="md:hidden  right-2 m-3 sm:p-2  text-xl text-black border-0.5 border-white"
        >
          <svg
            onClick={closeMenu}
            fill="currentColor"
            viewBox="0 0 20 20"
            className="w-8 h-8 cursor-pointer"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>

        <div
          id="mega-menu-full"
          className={`md:flex md:w-auto  ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul
            className={`flex flex-col md:flex-row md:space-x-6 md:mt-0 md:border-0 ${
              isMobileMenuOpen ? "bg-customColor h-screen text-white" : ""
            }`}
          >
           
            <Link
              href="/"
              className="block py-2  sm:ps-2 md:ps-2 lg:ps-2 xl:ps-40 ps-2 md:text-black lg:text-black xl:text-black text-white"
              aria-current="page"
            >
              Inicio
            </Link>
       
            <motion.li
          whileHover={{ scale: 1.1 }} // Escala al 110% cuando el mouse está encima
          whileTap={{ scale: 0.9 }} // Escala al 90% cuando se hace clic
        >
          
              <Link
                href="/contacto"
                className="block py-2 md:text-black lg:text-black xl:text-black text-white sm:ps-2 md:ps-1 lg:ps-2 xl:ps-20 ps-2 "
              >
                Contacto
              </Link></motion.li>


            <li>
           <Link
                href="/reserva"
                className="block py-2  sm:ps-2 md:ps-1 lg:ps-2 xl:ps-20 ps-2 md:text-black lg:text-black xl:text-black text-white  "
              >
                Reservas
              </Link>
         
            </li>
          

            {Array.from({ length: NUM_DROPDOWNS }).map((_, index) => (
              <li key={index}>
                <button
                  onClick={() => toggleDropdown(index)}
                  className={`flex  w-full py-2  ${
                    index !== 0 ? "" : ""
                  }md:text-black lg:text-black xl:text-black text-white sm:ps-2 md:ps-1 lg:ps-2 xl:ps-12 ps-2`}
                >
            {index === 0 ? "Servicios" : index === 1 }{" "}
             
                  <Flechita />
                </button>
              </li>
            ))}
       
    

           
            <div className="sm:hidden pt-20 ">
            
            </div>
          </ul>
        </div>
      </div>

      {Array.from({ length: NUM_DROPDOWNS }).map((_, index) => (
        <div
          key={index}
          id={`mega-menu-full-dropdown${index + 1}`}
          className={` ${
            dropdownStates[index] ? "block" : "hidden"
          } ${index !== 0 ? "" : ""}`}
        >
          {dropdownStates[index] && index === 0 && <MenuFlotante />}
      
        </div>
      ))}
    </nav>
  );
};

export default Index;