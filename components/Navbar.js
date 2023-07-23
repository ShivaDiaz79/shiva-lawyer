import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0 ">
              <Image
                src="/Img/logo2.png"
                alt="Logo"
                width={50}
                height={50}
                className=" rounded-full"
              />
            </div>

            {/* Pestañas a la izquierda (en pantalla grande) */}
            <div className="hidden ml-6 lg:flex lg:space-x-4">
              <a
                href="#"
                className="text-white hover:text-white px-3 py-2 rounded-md   text-xl font-saira font-medium"
              >
                SERVICIOS
              </a>
              <a
                href="#"
                className="text-white hover:text-white px-3 py-2  font-saira rounded-md text-xl font-medium"
              >
                NOTICIAS
              </a>
            </div>
          </div>
          <a href="./shivaLawyer">
            <h1 className="text-center text-white hover:text-white font-orbitron pt-5">
              {" "}
              ABOGADO SHIVA DIAZ
            </h1>
          </a>

          {/* Pestañas a la derecha */}
          <div className="hidden items-center space-x-4 lg:flex">
            <a
              href="/o"
              className="text-white hover:text-white font-saira px-3 py-2 rounded-md text-xl font-medium"
            >
              CONTTACTO
            </a>
            <a
              href="/o"
              className="text-white hover:text-white font-saira px-3 py-2 rounded-md text-xl font-medium"
            >
              LEGAL
            </a>
          </div>

          {/* Menú desplegable (en dispositivos móviles) */}
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú desplegable (en dispositivos móviles) */}
      <div
        className={`${isMenuOpen ? "block" : "hidden"} lg:hidden h-screen`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="/u"
            className="text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            URGENCIAS
          </a>
          <a
            href="/u"
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            SOLICITUDES
          </a>
          <a
            href="/u"
            className="text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            COTIZACIONES
          </a>
          <a
            href="/u"
            className="text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            INFORMACION JUDICIAL
          </a>

          <ul className="mt-6 space-y-1">
            <li>
              <a
                href=""
                className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
              >
                GENERAL
              </a>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <span className="text-sm font-medium"> SERVICIOS </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <a
                      href=""
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Derecho Penal
                    </a>
                  </li>

                  <li>
                    <a
                      href="/derechoInternacional"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Derecho Internacional
                    </a>
                  </li>
                  <li>
                    <a
                      href="/derechoInternacionalPenal"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Derecho Internacional Penal
                    </a>
                  </li>
                  <li>
                    <a
                      href="/derechoNotarial"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Derecho Notarial, Registral e Inmobiliario
                    </a>
                  </li>
                  <li>
                    <a
                      href="/derechoInformatico"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Derecho Informatico
                    </a>
                  </li>
                  <li>
                    <a
                      href="/derechoEmpresarial"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Derecho Empresarial
                    </a>
                  </li>
                  <li>
                    <a
                      href="/derechoAgrario"
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Derecho Agrario
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      Derecho de Familia
                    </a>
                  </li>
                </ul>
              </details>
            </li>

            <li>
              <a
                href=""
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                NOTICIAS
              </a>
            </li>

            <li>
              <a
                href=""
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                CONTACTO
              </a>
            </li>

            <li>
              <details className="group [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <span className="text-sm font-medium"> LEGAL </span>

                  <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <ul className="mt-2 space-y-1 px-4">
                  <li>
                    <a
                      href=""
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      ETICA PROFESIONAL
                    </a>
                  </li>

                  <li>
                    <a
                      href=""
                      className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                    >
                      LEYES Y REGLAMENTOS
                    </a>
                  </li>

                  <li>
                    <form action="/logout">
                      <button
                        type="submit"
                        className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                      >
                        FALLOS DE INTERES
                      </button>
                    </form>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <a
            href="#"
            className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
          >
            <Image
              alt="Man"
              src="/Img/logo.png"
              className="rounded-full object-cover"
              height={70}
              width={70}
            />

            <div>
              <p className="text-xs">
                <strong className="block font-medium">
                  Shiva Narada Benitez Diaz
                </strong>

                <span> shivanaradabenitezdiaz@gmail.com</span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
