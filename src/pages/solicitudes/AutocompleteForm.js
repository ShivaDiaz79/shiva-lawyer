import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
import { firestore } from "@/utilss/firebase";
import Modal from 'react-modal'; 

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

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
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleButtonClick = (text) => {
    switch (text) {
      case "Option 1":
        setMessage(
          "Hola, tengo un proceso penal abierto."
        );
        break;
      case "Option 2":
        setMessage(
          "Hola, tengo una consulta por una demanda civil,"
        );
        break;
      case "Option 3":
        setMessage("Hola, te hablo de la empresa [poner nombre de la empresa aqui], me gustaria recibir asesoria empresarial,");
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
      date: selectedDate,
      // Agregar fecha y hora actuales
      createdAt: new Date().toISOString(), // Obtener la fecha y hora actuales y convertirla a un formato de cadena
    };

    try {
      await firestore.collection("enquiries").add(formData);
      console.log("Formulario enviado:", formData);
      openModal();
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
    }

    // Limpiar los campos del formulario después de enviar el mensaje
    event.target.reset();
    setMessage("");
    setSelectedDate(null);
  };

  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg">
              Todas las inquietudes o programar una reunión puede ser escrita
            </p>
            <div className="mt-8">
              <Link href="" className="text-2xl font-bold text-pink-600">
                73665607
              </Link>
              <address className="mt-2 not-italic">
                Calle J Condominio Villa Magna Sur Off 217
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
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Fecha y Hora</label>
                <DatePicker
                  id="date"
                  selected={selectedDate}
                  onChange={date => setSelectedDate(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  timeCaption="Hora"
                  dateFormat="dd/MM/yyyy HH:mm"
                  className="w-full form-input rounded-lg border-gray-200 p-3 text-sm"
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Mensaje Enviado"
        ariaHideApp={false} 
      >
        <h2>Mensaje Enviado</h2>
        <p>¡El mensaje ha sido enviado con éxito!</p>
        <button onClick={closeModal}>Cerrar</button>
      </Modal>
    </section>
  );
};

export default AutocompleteForm;

