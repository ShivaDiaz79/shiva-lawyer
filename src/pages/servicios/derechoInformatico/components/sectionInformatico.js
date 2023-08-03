import Image from "next/image";

const SectionInformatico = () => {
  return (
    <div className="bg-gray-800 min-h-screen border-8 border-solid border-red-800 pt-10 grid sm:grid-cols-3 mx-1 sm:mx-10 mb-20">
    

      <div className=" bg-red-800 h-screeen m-2 border-8 border-solid border-gray-800 sm:col-span-2">
        <h1 className="text-white text-xl font-thin font-orbitron p-2 text-center underline">
          REGULACION DE LA PROPIEDAD Y TENENCIA DE LA TIERRA
        </h1>
        <p className="text-white p-4 ">
          {" "}
          El derecho agrario aborda la forma en que se regula la propiedad y
          tenencia de la tierra en el sector agrícola. <br />
          Esto incluye temas como la adquisición, transmisión, deslinde y
          registro de la tierra. <br /> El derecho de propiedad agraria es un
          componente esencial del derecho agrario que regula la titularidad y
          tenencia de la tierra utilizada para actividades agrícolas. Su
          relevancia radica en garantizar la seguridad jurídica de las
          posesiones, ofreciendo protección contra posibles disputas y
          conflictos de propiedad. Una sólida estructura jurídica en esta área
          proporciona a los interesados la confianza necesaria para realizar
          inversiones a largo plazo y planificar de manera estratégica el
          desarrollo y crecimiento de sus actividades agrícolas. Dentro del
          marco del derecho de propiedad agraria, se contemplan aspectos como
          los procedimientos de adquisición y transmisión de la tierra, las
          formas de tenencia (propiedad, arrendamiento, etc.), y los derechos y
          obligaciones de las partes involucradas en los contratos de
          arrendamiento.{" "}
        </p>
        <h1 className="text-white text-xl p-2 text-center underline font-thin font-orbitron">
          POLITICAS DE IMPORTACION Y EXPORTACION AGRICOLA
        </h1>
        <p className="text-white p-4">
          son un componente clave del derecho agrario con un impacto directo en
          el comercio internacional de productos agrícolas. Estas políticas
          regulan aspectos como aranceles, cuotas, subsidios y restricciones
          para proteger los intereses del país y fomentar una economía agrícola
          sostenible y competitiva. En términos de importación, las políticas
          pueden afectar la disponibilidad y precios de insumos y bienes
          agrícolas extranjeros en el mercado local. Una política de importación
          bien equilibrada puede favorecer la adopción de tecnología moderna y
          aumentar la eficiencia en la producción agrícola.
        </p>
      </div>
      <div className=" bg-red-900 h-80 m-2 flex items-center justify-center w-80 sm:w-80 sm:h-80 sm:my-auto border-8 mx-auto border-solid border-red-800">
        <Image
          src="/Img/derechoAgrario.png"
          alt="foto"
          width={400}
          height={400}
        />
      </div>
      <div className=" bg-red-800 h-screeen m-2 border-8 border-solid border-gray-800 sm:col-span-3">
        <h1 className="text-white text-xl p-2 text-center font-thin font-orbitron">
          {" "}
          TEMAS QUE ABORDAMOS
        </h1>
        <p className="text-white p-4 sm:ps-20 sm:hyphens-none ">
          REGULARIZACION DE TIERRAS RURALES:
          <br />
          Asesoramiento en la obtención y regularización de títulos de propiedad
          para tierras rurales. <br />
          Procedimientos legales para resolver conflictos de tierras y derechos
          de posesión en comunidades rurales.
          <br />
          Gestión de trámites ante las autoridades competentes para asegurar la
          seguridad jurídica de las tierras agrícolas.
          <br />
          CONTRATOS AGRARIOS:
          <br />
          Elaboración y revisión de contratos de arrendamiento y contratos de
          compra-venta de tierras agrícolas.
          <br />
          Asesoría en la redacción de contratos de producción y contratos de
          suministro para la adquisición de insumos agrícolas.
          <br />
          Negociación y mediación en la resolución de conflictos contractuales
          entre agricultores y propietarios de tierras.
          <br />
        COMERCIO INTERNACIONAL AGRICOLA:
          <br />
          Asesoramiento en la importación y exportación de productos agrícolas,
          considerando los tratados comerciales internacionales en los que
          Bolivia es parte.
          <br />
          Evaluación de aranceles, cuotas y regulaciones de importación y
          exportación aplicables al comercio agrícola. <br />
          Representación ante instituciones gubernamentales y aduanas para
          asegurar el cumplimiento de las políticas de comercio agrícola.
          <br />
          LITIGIOS Y RESOLUCION DE CONFLICTOS AGRARIOS:
          <br />
          Representación legal en procesos judiciales y administrativos
          relacionados con disputas de propiedad, tenencia de tierras y derechos
          agrarios.
          <br />
          Mediación y arbitraje para resolver conflictos entre actores del
          sector agrícola.
          <br />
          Defensa de los intereses de los clientes en casos de controversias
          comerciales agrícolas y disputas agrarias.
          <br />
          CUMPLIMIENTO NORMATIVO Y RESPONSABILIDAD SOCIAL:
          <br />
          Asesoramiento en la adopción de prácticas agrícolas sostenibles y en
          línea con las regulaciones ambientales bolivianas.
          <br />
          Evaluación y cumplimiento de normativas nacionales agrarias y de
          trabajo rural.
          <br />
          Desarrollo de políticas de responsabilidad social empresarial en el
          sector agrícola boliviano.
          <br />
        </p>
      </div>
    </div>
  );
};

export default SectionInformatico;