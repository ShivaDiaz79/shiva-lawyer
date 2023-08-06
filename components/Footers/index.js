import React from "react";
import Link from "next/link";
import Twitter from "../Svg/Twitter";
import Instagram from "../Svg/Instagram";
import Facebook from "../Svg/Facebook";
import Dribbble from "../Svg/Dribbble";
import Github from "../Svg/Github";

const FooterLink = ({ href, text, icon: Icon }) => (
  <Link href={href} className="text-white transition hover:opacity-75">
    {Icon ? <Icon /> : text}
  </Link>
);

const Footer = () => {
  const footerText =
    "El derecho no esta en la norma sino en la conducta. Por eso el derecho es vida humana viviente. No se interpreta la norma sino la conducta, es una hermeneutica existencial. Carlos Cossio.";

  const handleUrgenciasClick = () => {
    const confirmText =
      "¿Deseas ingresar directamente a WhatsApp o llenar un formulario?\n\n" +
      "Presiona 'Aceptar' para ingresar directamente, " +
      "o 'Cancelar' para llenar un formulario.";

    const userChoice = window.confirm(confirmText);

    if (userChoice) {
      // El usuario eligió ingresar directamente a WhatsApp
      const phoneNumber = "73665607";
      window.location.href = `https://api.whatsapp.com/send?phone=${phoneNumber}`;
    } else {
      // El usuario eligió llenar un formulario
      // Redirigir a la página de 'urgencia'
      window.location.href = "/solicitudes";
    }
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook },
    { name: "Instagram", icon: Instagram },
    { name: "Twitter", icon: Twitter },
    { name: "GitHub", icon: Github },
    { name: "Dribbble", icon: Dribbble },
  ];

  return (
    <footer className="bg-gray-800">
      <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold font-dancing text-white sm:text-5xl">
            No hay hechos eternos, como tampoco hay verdades absolutas.
          </h2>

          <p className=" text-white">{footerText}</p>

          <div
            onClick={handleUrgenciasClick}
            className="mt-8 inline-block rounded-full border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500 cursor-pointer"
          >
            URGENCIAS
          </div>
        </div>

        <div className="mt-16 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24">
          <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
            <li>
              <FooterLink href=" ./terminosCondiciones" text="Terminos & Condiciones" />
            </li>

            <li>
              <FooterLink href="#" text="Politica de Privacidad" />
            </li>

            <li>
              <FooterLink href=" ./comentarios" text="Comentarios" />
            </li>
          </ul>

          <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <FooterLink
                  href="/"
                  rel="noreferrer"
                  target="_blank"
                  icon={link.icon}
                  className="text-gray-700 transition hover:opacity-75"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
