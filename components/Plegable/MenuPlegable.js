import Link from 'next/link';

const MenuPlegable = ({ menuDown }) => {
  return (
    <>
      {menuDown !== '' && (
        <div className="hidden sm:flex sm:flex-col justify-center p-4 text-left pb-40 ms-24">
          {menuDown === 'servicios' && (
            <>
              <MenuItem link="/servicios/derechoPenal" text="DERECHO PENAL" />
              <MenuItem link="/servicios/derechoInternacional" text="DERECHO INTERNACIONAL" />
              <MenuItem link="/servicios/derechoInternacionalPenal" text="DERECHO INTERNACIONAL PENAL" />
              <MenuItem link="/servicios/derechoInformatico" text="DERECHO INFORMATICO" />
              <MenuItem link="/servicios/derechoNotarial" text="DERECHO NOTARIAL" />
              <MenuItem link="/servicios/derechoEmpresarial" text="DERECHO EMPRESARIAL" />
              <MenuItem link="/servicios/derechoFamilia" text="DERECHO DE FAMILIA" />
              <MenuItem link="/servicios/derechoProcesal" text="DERECHO PROCESAL" />
              <MenuItem link="/ejecucionPenal" text="EJECUCION PRIVATIVA DE LA PENA" />
            </>
          )}
          
          {menuDown === 'legal' && (
            <>
              <MenuItem link="eticaProfesional" text="ETICA PROFESIONAL" className="flex items-end justify-end" />
              <MenuItem link="leyes" text="LEYES Y REGLAMENTOS" className="flex items-end justify-end" />
              <MenuItem link="fallos" text="FALLOS DE INTERES" className=" flex items-end justify-end" />
            </>
          )}
       
        </div>
      )}
    </>
  );
};

const MenuItem = ({ link, text, className }) => {
  return (
    <ul className={`my-3 ${className}`}>
      <Link href={link}>
        <span className="text-gray-400 text-sm font-orbitron font-bold hover:text-black">{text}</span>
      </Link>
    </ul>
  );
};

export default MenuPlegable;
