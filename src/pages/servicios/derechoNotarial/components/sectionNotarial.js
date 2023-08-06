import Image from "next/image";

const SectionNotarial = () => {
  return (
    <div className="bg-gray-800 min-h-screen border-8 border-solid border-red-800 pt-10 grid md:grid-cols-3 mx-1 md:mx-10 mb-20">
      <div className="bg-red-900 h-60 m-2 flex items-center justify-center w-80 md:w-96 md:h-72 md:my-auto border-8 mx-auto border-solid border-red-800">
        <Image
          src="/Img/derechoNotarial.jpg"
          alt="foto"
          width={800}
          height={600}
        />
      </div>

      <div className="bg-red-800 h-auto m-2 border-8 border-solid border-gray-800 md:col-span-2">
        <h1 className="text-white text-xl font-thin font-orbitron p-2 text-center underline">
          Seguridad Jurídica en Bienes Inmuebles y su Relación con el Derecho
          Notarial en Bolivia:
        </h1>
        <p className="text-white p-4">
          El derecho notarial ha sido fundamental para garantizar la seguridad
          jurídica en transacciones de bienes inmuebles en Bolivia. Los notarios
          desempeñan un papel clave en la protocolización de escrituras de
          compraventa, asegurando que se cumplan todas las formalidades legales
          y que la transferencia de propiedad sea válida y legal.
          <br />
          La seguridad jurídica en bienes inmuebles es esencial para brindar
          confianza tanto a compradores como a vendedores. Los notarios
          intervienen en la constitución y cancelación de garantías hipotecarias
          y gravámenes, protegiendo los intereses de las partes y asegurando la
          validez de las operaciones crediticias.
          <br />
          Asimismo, el derecho notarial ha sido relevante en la tramitación de
          usucapión, un proceso legal para adquirir la propiedad de bienes
          inmuebles a través de la posesión pacífica y continua. También
          intervienen en la adjudicación municipal de terrenos y propiedades,
          asegurando la titularidad y validez de los bienes adquiridos a través
          de este mecanismo legal.
          <br />
        </p>
        <h1 className="text-white text-xl p-2 text-center underline font-thin font-orbitron px-4">
          La Importancia de la Evolución del Derecho Notarial en Bolivia:
        </h1>
        <p className="text-white p-4">
          El derecho notarial en Bolivia ha experimentado una significativa
          evolución para adaptarse a las cambiantes necesidades de la sociedad
          moderna. Esta evolución es crucial para garantizar la certeza y
          seguridad jurídica en una amplia variedad de actos y contratos, más
          allá de la compraventa de bienes inmuebles.
          <br />
          La intervención notarial ha evolucionado para brindar servicios que
          garantizan la autenticidad y validez de diversos documentos legales,
          tales como actas de asambleas, testimonios notariales y reconocimiento
          de firmas. Esto proporciona a los ciudadanos, empresas y entidades
          gubernamentales la confianza necesaria para realizar transacciones y
          tomar decisiones importantes respaldadas por la fe pública notarial.
          <br />
          Además, esta evolución ha llevado a los notarios a intervenir en
          asuntos legales relacionados con viajes de menores, legalización de
          documentos extranjeros y redacción de contratos comerciales,
          asegurando la protección de los derechos y la transparencia en las
          operaciones.
          <br />
        </p>
      </div>

      <div className="bg-red-800 h-auto m-2 border-8 border-solid border-gray-800 md:col-span-3">
        <h1 className="text-white text-xl p-2 text-center font-thin font-orbitron">
          TEMAS QUE ABORDAMOS
        </h1>
        <p className="text-white p-4 md:ps-20 md:hyphens-none">
          Protocolización de Escrituras de Compraventa de Bienes Inmuebles.
          <br />
          Constitución y Cancelación de Garantías Hipotecarias y Gravámenes.
          <br />
          Tramitación de Usucapión.
          <br />
          Adjudicación Municipal de Terrenos y Propiedades.
          <br />
          Redacción de Contratos de Arrendamiento para Propiedades.
          <br />
          Tramitación de Herencias y Testamentos relacionados con Bienes
          Inmuebles.
          <br />
          Cancelación de Hipotecas y Gravámenes sobre Bienes Inmuebles.
          <br />
          Asesoramiento en Derecho Inmobiliario.
          <br />
          Transferencias de Propiedad de Bienes Inmuebles.
          <br />
          Donaciones de Bienes Inmuebles.
          <br />
          Redacción y Protocolización de Actas de Asambleas y Juntas.
          <br />
          Emisión de Testimonios Notariales para Hechos Relevantes.
          <br />
          Autorización de Viajes de Menores al Exterior.
          <br />
          Reconocimiento de Firmas en Documentos Privados.
          <br />
          Legalización de Documentos Extranjeros.
          <br />
          Redacción de Contratos de Arrendamiento y Comerciales.
          <br />
          Elaboración de Poderes Notariales.
          <br />
          Notificaciones Extrajudiciales.
          <br />
          Redacción de Contratos de Trabajo y Laborales.
          <br />
          Asesoramiento en Derecho Notarial.
          <br />
        </p>
      </div>
    </div>
  );
};

export default SectionNotarial;
