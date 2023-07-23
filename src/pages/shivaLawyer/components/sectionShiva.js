import Image from "next/image";

const SectionShiva = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <Image
                alt="shiva"
                src="/Img/shiva2.png"
                className="absolute inset-0 h-full w-full object-cover"
                width={100}
                height={100}
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl text-center">ABOGADO</h2>

              <p className="mt-4 text-gray-600">
                .Como el mejor abogado , mi principal objetivo es representar a
                mis clientes con el más alto nivel de profesionalismo,
                compromiso y ética. Mi enfoque es velar por los intereses de mis
                defendidos de manera diligente y estratégica, buscando siempre
                las mejores soluciones legales para sus necesidades. <br />
                .Mi éxito como abogado radica en mi profundo conocimiento del
                derecho y mi habilidad para aplicarlo de manera efectiva en cada
                caso. Me esfuerzo por mantenerme actualizado sobre las últimas
                leyes y regulaciones para brindar a mis clientes asesoramiento
                legal sólido y confiable. <br /> 
                . Nunca comprometo mis
                principios éticos y aseguro que cada decisión que tomo esté
                basada en la justicia y la equidad, manteniéndolos informados en
                cada etapa del proceso legal y brindándoles un enfoque
                personalizado y dedicado para sus casos individuales.
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded border border-indigo-600 bg-gray-800 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500 items-center"
              >
                Ponerse en contacto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionShiva;
