
import Link from "next/link";
import Image from "next/image";
import TypedTextWithColorChange from "../Contenido/TypeTextWithColorChange";

const MenuItem = ({ link, text, className }) => {
  return (
    <ul className={`my-3 ${className}`}>
      <Link href={link}>
        <span className="text-gray-400 text-sm font-orbitron font-bold hover:text-black">
          {text}
        </span>
      </Link>
    </ul>
  );
};

const MenuPlegable = ({ menuDown }) => {
  const legalImagen = "/Img/justicia6.jpg";
  const serviciosImagen = "/Img/lawyer5.jpg";

  const texts = [
    {
      content: "¡Bienvenido a la mejor plataforma de abogados del país!",
      color: "text-red-500",
    },
    {
      content: "Aquí encontrarás a los mejores profesionales del derecho.",
      color: "text-yellow-500",
    },
    {
      content: "Conócenos y descubre todo lo que podemos ofrecerte.",
      color: "text-green-500",
    },
  ];

  return (
    <>
      {menuDown !== "" && (
        <div className="hidden sm:flex justify-center p-4 text-left pb-16 ">
          <div className="grid grid-cols-2 gap-4 w-full">
            {menuDown === "servicios" && (
              <>
                <div>
                  <MenuItem
                    link="/servicios/derechoPenal"
                    text="DERECHO PENAL"
                    className="  bg-red-800 ps-24 ms-20"
                  />
                  <MenuItem
                    link="/servicios/derechoInternacional"
                    text="DERECHO INTERNACIONAL"
                    className=" flex  bg-red-800 ps-24 ms-20"
                  />
                  <MenuItem
                    link="/servicios/derechoInternacionalPenal"
                    text="DERECHO INTERNACIONAL PENAL"
                    className=" bg-red-800 ps-24 ms-20"
                  />
                  <MenuItem
                    link="/servicios/derechoInformatico"
                    text="DERECHO INFORMATICO"
                    className=" bg-red-800 ps-24 ms-20"
                  />
                  <MenuItem
                    link="/servicios/derechoNotarial"
                    text="DERECHO NOTARIAL"
                    className=" bg-red-800 ps-24 ms-20"
                  />
                  <MenuItem
                    link="/servicios/derechoEmpresarial"
                    text="DERECHO EMPRESARIAL"
                    className=" bg-red-800 ps-24 ms-20"
                  />
                  <MenuItem
                    link="/servicios/derechoFamilia"
                    text="DERECHO DE FAMILIA"
                    className=" bg-red-800 ps-24 ms-20"
                  />
                  <MenuItem
                    link="/servicios/derechoProcesal"
                    text="DERECHO PROCESAL"
                    className=" bg-red-800 ps-24 ms-20"
                  />
                   <MenuItem
                    link="/servicios/derechoAgrario"
                    text="DERECHO AGRARIO"
                    className=" bg-red-800 ps-24 ms-20"
                  />
                  <MenuItem
                    link="/ejecucionPenal"
                    text="EJECUCION PRIVATIVA DE LA PENA"
                    className=" bg-red-800 ps-24 ms-20"
                  />
                  <div className=" text-center ">
                    <Link
                      className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
                      href="/cotizaciones"
                    >
                      <span className="absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"></span>

                      <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
                        Cotiza tus servicios
                      </span>
                    </Link>
                  </div>
                  <div className="flex justify-center items-center ">
                    {/* Aquí se incluye el componente TypedTextWithColorChange */}
                    <TypedTextWithColorChange texts={texts} />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src={serviciosImagen}
                    alt="Servicios"
                    className=" "
                    width={600}
                    height={600}
                  />
                </div>
              </>
            )}

            {menuDown === "legal" && (
              <>
                <div className="flex items-end justify-end  ">
                  <Image
                    src={legalImagen}
                    alt="Legal"
                    className=" "
                    width={600}
                    height={600}
                  />
                </div>
                <div className=" ms-12">
                  <MenuItem
                    link="eticaProfesional"
                    text="ETICA PROFESIONAL"
                    className="  bg-red-800  ms-80 ps-11"
                  />
                   <MenuItem
                    link="leyes"
                    text="LEYES Y REGLAMENTOS"
                    className=" bg-red-800  ms-80 ps-11"
                  />
                  <MenuItem
                    link="fallos"
                    text="FALLOS DE INTERES"
                    className=" bg-red-800 ms-80 ps-11"
                  />
                  <div className=" mt-20  ps-20">
                    <Link
                      className="group relative inline-block overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring"
                      href="/download"
                    >
                      <span className="absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"></span>

                      <span className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white">
                        Saber Mas
                      </span>
                    </Link>
                  </div>
                  <div className="flex justify-center items-center mt-10">
                    {/* Aquí se incluye el componente TypedTextWithColorChange */}
                    <TypedTextWithColorChange texts={texts} />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MenuPlegable;