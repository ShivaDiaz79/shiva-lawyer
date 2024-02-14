// pages/tusubruta/terminos-condiciones.js
import React from 'react';
import Layout from '../../../components/Layout';
import ParagraphComponent from '../../../components/Contenido/ParagraphComponent';

const TerminosCondiciones = () => {
  const termsText = `
    1. Aceptación de Términos y Condiciones
    Al acceder y utilizar el sitio web de [Nombre de la Empresa] (en adelante, Sitio Web), usted acepta cumplir con los siguientes términos y condiciones de uso. Si no está de acuerdo con estos términos, le solicitamos abstenerse de utilizar el Sitio Web.

    2. Propósito y Contenido
    El Sitio Web tiene un propósito informativo y educativo relacionado con asuntos legales en Bolivia. La información proporcionada no constituye asesoramiento legal específico para situaciones individuales y no debe considerarse como tal.

    3. Propiedad Intelectual
    Todo el contenido presente en el Sitio Web, incluyendo pero no limitado a texto, imágenes, gráficos, logotipos y diseños, están protegidos por derechos de propiedad intelectual y son propiedad exclusiva de [Nombre de la Empresa]. Queda prohibida la reproducción, distribución o modificación de dicho contenido sin el consentimiento por escrito de [Nombre de la Empresa].

    4. Responsabilidad y Exención de Responsabilidad
    El uso del Sitio Web es bajo su propio riesgo. No nos hacemos responsables por cualquier pérdida, daño o consecuencia derivados del uso de la información contenida en el Sitio Web. La información proporcionada puede no estar actualizada o ser incompleta, y no garantizamos su precisión.

    5. Uso Adecuado
    Usted se compromete a utilizar el Sitio Web de manera adecuada y legal, respetando las leyes y regulaciones de Bolivia. Queda prohibido el uso del Sitio Web para fines ilícitos, difamatorios, fraudulentos o que violen los derechos de terceros.

    6. Enlaces Externos
    El Sitio Web puede contener enlaces a sitios web de terceros. No tenemos control sobre el contenido de dichos sitios y no asumimos responsabilidad por el contenido, precisión o seguridad de los mismos. La inclusión de enlaces no implica aprobación por nuestra parte.

    7. Privacidad
    Nuestra Política de Privacidad, disponible en [Enlace a la Política de Privacidad], regula la recopilación, uso y almacenamiento de datos personales proporcionados por los usuarios del Sitio Web.

    8. Jurisdicción y Ley Aplicable
    Estos términos y condiciones se rigen por las leyes de Bolivia. Cualquier controversia derivada del uso del Sitio Web estará sujeta a la jurisdicción exclusiva de los tribunales de [Ciudad, Departamento].

    9. Modificaciones
    Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigencia a partir de su publicación en el Sitio Web.

    10. Contacto
    Si tiene preguntas o comentarios sobre estos términos y condiciones, puede ponerse en contacto con nosotros a través de [correo electrónico de contacto].

    Al utilizar nuestro Sitio Web, usted acepta cumplir con estos términos y condiciones. Si no está de acuerdo con ellos, le solicitamos no utilizar el Sitio Web.

    Fecha de entrada en vigor: [Fecha de entrada en vigor]
  `;

  return (
    <Layout>
      <section className='bg-gray-800 min-h-screen flex justify-center items-center'>
        <div className='container border-8 border-red-800 sm:w-3/4 bg-white mx-auto px-6 py-12'>
          <h1 className='text-center'>TÉRMINOS Y CONDICIONES DE USO</h1>
          <ParagraphComponent text={termsText} />
        </div>
      </section>
    </Layout>
  );
};

export default TerminosCondiciones;
