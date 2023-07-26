
import Link from "next/link"; 
import Image from "next/image"; 

// const MenuNavbar = () => {
//   return (
//     <div className="px-2 pt-2 pb-3 space-y-1 h-screen bg-red-800 z-50">
//       <Link
//         href=" /urgencia"
//         className="text-white block px-3 py-2 rounded-md text-base font-medium"
//       >
//         URGENCIAS
//       </Link>
//       <Link
//         href=" /solicitudes"
//         className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
//       >
//         SOLICITUDES
//       </Link>
//       <Link
//         href=" /cotizaciones"
//         className="text-white block px-3 py-2 rounded-md text-base font-medium"
//       >
//         COTIZACIONES
//       </Link>
//       <Link
//         href=" /informacionJudicial"
//         className="text-white block px-3 py-2 rounded-md text-base font-medium"
//       >
//         INFORMACION JUDICIAL
//       </Link>

//       <ul className="mt-6 space-y-1">
//         <li>
//           <Link
//             href=" "
//             className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
//           >
//             GENERAL
//           </Link>
//         </li>

//         <li>
//           <details className="group [&_summary::-webkit-details-marker]:hidden">
//             <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
//               <span className="text-sm font-medium"> SERVICIOS </span>

//               <span className="shrink-0 transition duration-300 group-open:-rotate-180">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </span>
//             </summary>

//             <ul className="mt-2 space-y-1 px-4">
//               <li>
//                 <Link
//                   href=" /servicios/derechoPenal"
//                   className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//                 >
//                   Derecho Penal
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href=" /servicios/derechoPenal"
//                   className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//                 >
//                   Derecho Internacional
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href=" /servicios/derechoInternacionalPenal"
//                   className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//                 >
//                   Derecho Internacional Penal
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href=" /servicios/derechoInformatico"
//                   className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//                 >
//                   Derecho Informatico
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href=" /servicios/derechoNotarial"
//                   className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//                 >
//                   Derecho Notarial
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href=" /servicios/derechoEmpresarial"
//                   className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//                 >
//                   Derecho Empresarial
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href=" /servicios/derechoAgrario"
//                   className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//                 >
//                   Derecho Agrario
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href=" /servicios/derechoFamilia"
//                   className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//                 >
//                   Derecho Familia
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href=" /servicios/derechoProcesal"
//                   className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//                 >
//                   Derecho Procesal
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href=" /servicios/ejecucionPenal"
//                   className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//                 >
//                   Ejecucion Privativa de la Pena
//                 </Link>
//               </li>

//               {/* Más links de servicios... */}
//             </ul>
//           </details>
//         </li>

//         <li>
//           <Link
//             href=" /noticias"
//             className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//           >
//             NOTICIAS
//           </Link>
//         </li>

//         <li>
//           <Link
//             href=" /contacto"
//             className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//           >
//             CONTACTO
//           </Link>
//         </li>

//         <li>
//           <details className="group [&_summary::-webkit-details-marker]:hidden">
//             <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
//               <span className="text-sm font-medium"> LEGAL </span>

//               <span className="shrink-0 transition duration-300 group-open:-rotate-180">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </span>
//             </summary>

//             <ul className="mt-2 space-y-1 px-4">
//               <li>
//                 <Link
//                   href="./eticaProfesional"
//                   className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//                 >
//                   ETICA PROFESIONAL
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href=" /leyes"
//                   className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
//                 >
//                   LEYES Y REGLAMENTOS
//                 </Link>
//               </li>

//               <li>
//                 <form action=" /fallos">
//                   <button
//                     type="submit"
//                     className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
//                   >
//                     FALLOS DE INTERES
//                   </button>
//                 </form>
//               </li>

//               {/* Más links legales... */}
//             </ul>
//           </details>
//         </li>
//       </ul>

//       <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
//         <Link
//           href=" /urgencia"
//           className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
//         >
//           <Image
//             alt="Man"
//             src="/Img/shiva2.png"
//             className="rounded-full object-cover"
//             height={70}
//             width={70}
//           />

//           <div className="my-10">
//             <p className="text-xs">
//               <strong className="block font-medium">
//                 Shiva Narada Benitez Diaz
//               </strong>
//               <span>shivanaradabenitezdiaz@gmail.com</span>
//             </p>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default MenuNavbar;








const MenuItem = ({ href, label }) => {
  return (
    <Link href={href}>
      <div className="text-white block px-3 py-2 rounded-md text-base font-medium">
        {label}
      </div>
    </Link>
  );
};

const SubMenuItem = ({ href, label }) => {
  return (
    <li>
      <Link href={href}>
        <div className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
          {label}
        </div>
      </Link>
    </li>
  );
};

const MenuNavbar = () => {
  return (
    <div className="px-2 pt-2 pb-3 space-y-1 h-screen bg-red-800 z-50">
      <MenuItem href="/urgencia" label="URGENCIAS" />
      <MenuItem href="/solicitudes" label="SOLICITUDES" />
      <MenuItem href="/cotizaciones" label="COTIZACIONES" />
      <MenuItem href="/informacionJudicial" label="INFORMACION JUDICIAL" />

      <ul className="mt-6 space-y-1">
        <li>
          <Link href="/">
            <div className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
              GENERAL
            </div>
          </Link>
        </li>

        <li>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <span className="text-sm font-medium">SERVICIOS</span>

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
              <SubMenuItem href="/servicios/derechoPenal" label="Derecho Penal" />
              <SubMenuItem href="/servicios/derechoInternacional" label="Derecho Internacional" />
              <SubMenuItem href="/servicios/derechoInternacionalPenal" label="Derecho Internacional Penal" />
              <SubMenuItem href="/servicios/derechoInformatico" label="Derecho Informatico" />
              <SubMenuItem href="/servicios/derechoNotarial" label="Derecho Notarial" />
              <SubMenuItem href="/servicios/derechoEmpresarial" label="Derecho Empresarial" />
              <SubMenuItem href="/servicios/derechoAgrario" label="Derecho Agrario" />
              <SubMenuItem href="/servicios/derechoFamilia" label="Derecho Familia" />
              <SubMenuItem href="/servicios/derechoProcesal" label="Derecho Procesal" />
              <SubMenuItem href="/servicios/ejecucionPenal" label="Ejecucion Privativa de la Pena" />

              {/* Más submenús de servicios... */}
            </ul>
          </details>
        </li>

        <li>
          <MenuItem href="/noticias" label="NOTICIAS" />
        </li>

        <li>
          <MenuItem href="/contacto" label="CONTACTO" />
        </li>

        <li>
          <details className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              <span className="text-sm font-medium">LEGAL</span>

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
              <SubMenuItem href="/eticaProfesional" label="ETICA PROFESIONAL" />
              <SubMenuItem href="/leyes" label="LEYES Y REGLAMENTOS" />
              <form action="/fallos">
                <button
                  type="submit"
                  className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                >
                  FALLOS DE INTERES
                </button>
              </form>
            </ul>
          </details>
        </li>
      </ul>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <Link href="/urgencia">
          <div className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
            <Image
              alt="Man"
              src="/Img/shiva2.png"
              className="rounded-full object-cover"
              height={70}
              width={70}
            />
            <div className="my-10">
              <p className="text-xs">
                <strong className="block font-medium">
                  Shiva Narada Benitez Diaz
                </strong>
                <span>shivanaradabenitezdiaz@gmail.com</span>
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MenuNavbar;

