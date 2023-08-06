import React, { useState } from "react";
import Link from "next/link";
// import firebase from "firebase/app";
// import "firebase/firestore";

// const firebaseConfig = {
//   // Aquí coloca tu configuración de Firebase
//   // Puedes encontrar esta información en la consola de Firebase
// };

// // Inicializa Firebase
// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();

const InputField = ({ label, id, ...rest }) => (
    <div className="w-full">
      <label className="sr-only" htmlFor={id}>
        {label}
      </label>
      <input className="w-full rounded-lg border-gray-200 p-3 text-sm" type="text" id={id} {...rest} />
    </div>
  );
  
  const RadioButton = ({ text, value, onClick }) => (
    <div onClick={onClick} className="w-full">
      <input className="peer sr-only" type="radio" id={value} name="option" />
      <label
        htmlFor={value}
        className="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white cursor-pointer"
        tabIndex="0"
      >
        <span className="text-sm">{text}</span>
      </label>
    </div>
  );

const AutocompleteForm = () => {
  const [message, setMessage] = useState("");

  const handleButtonClick = (text) => {
    switch (text) {
      case "Option 1":
        setMessage(
          "Hola, tengo un proceso penal abierto. Mi nombre es [tu nombre aquí]"
        );
        break;
      case "Option 2":
        setMessage(
          "Hola, tengo una consulta por una demanda civil, mi nombre es [escribir tu nombre aqui]"
        );
        break;
      case "Option 3":
        setMessage("Hola, te hablo de la empresa [poner nombre de la empresa aqui], me gustaria recibir asesoria empresarial, mis ddatos son()");
        break;
      default:
        setMessage("");
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
      message: message,
    };

    try {
      // Guardar los datos en Firebase
      await db.collection("enquiries").add(formData);
      console.log("Formulario enviado:", formData);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }
  };

  return (
   
        <section className="bg-gray-100">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
              <div className="lg:col-span-2 lg:py-12">
                <p className="max-w-xl text-lg">
                  Todas las inquietudes o programar una reunión puede ser escrita
                  aquí y en un corto plazo nos comunicaremos. Recuerda que existe
                  confidencialidad recién al firmar la carta compromiso. Si estás en
                  una urgencia puedes hacer click sobre el número en pantalla y
                  escribir o llamar. Muchas Gracias.
                </p>
                <div className="mt-8">
                  <Link href="" className="text-2xl font-bold text-pink-600">
                    73665607
                  </Link>
                  <address className="mt-2 not-italic">
                    Avenida 4° Anillo, Torre empresarial Platinum 2 Business Center,
                    Piso 21 Oficina 2
                  </address>
                </div>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form action="" className="space-y-4" onSubmit={handleSubmit}>
                  <InputField label="Name" id="name" placeholder="Nombre" />
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <InputField
                      label="Email"
                      id="email"
                      placeholder="Direccion de correo electronico"
                      type="email"
                    />
                    <InputField
                      label="Phone"
                      id="phone"
                      placeholder="Numero de telefono"
                      type="tel"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                    <RadioButton
                      text="Derecho Penal"
                      value="Option 1"
                      onClick={() => handleButtonClick("Option 1")}
                    />
                    <RadioButton
                      text="Derecho Civil"
                      value="Option 2"
                      onClick={() => handleButtonClick("Option 2")}
                    />
                    <RadioButton
                      text="Derecho Empresarial"
                      value="Option 3"
                      onClick={() => handleButtonClick("Option 3")}
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="message">
                      Descripcion
                    </label>
                    <textarea
                      className="w-full form-textarea rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Message"
                      rows="8"
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="btn-primary block w-full rounded-lg bg-black text-white py-3 font-medium text-center"
                    >
                     Enviar Mensaje
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
  );
};

export default AutocompleteForm;
