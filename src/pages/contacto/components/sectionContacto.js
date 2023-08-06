import React from "react";
import { Flowbite } from "flowbite-react";

const SectionContacto = () => {
  const inputStyles =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
  const labelStyles =
    "block mb-2 text-sm font-medium text-gray-900 dark:text-white";
  const linkStyles = "text-blue-600 hover:underline dark:text-blue-500";

  const renderInput = (labelText, id, placeholder, type = "text") => {
    return (
      <div>
        <label htmlFor={id} className={labelStyles}>
          {labelText}
        </label>
        <input
          type={type}
          id={id}
          className={inputStyles}
          placeholder={placeholder}
        />
      </div>
    );
  };

  return (
    <Flowbite>
      <form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          {renderInput("Nombre de pila", "first_name", "John")}
          {renderInput("Apellido", "last_name", "Doe")}
          {renderInput("Empresa", "company", "Flowbite")}
          {renderInput("Numero de Telefono", "phone", "123-45-678", "tel")}
          {renderInput("Website URL", "website", "shiva-lawyer.com", "url")}
          {renderInput("Visitantes únicos (al mes)", "visitors", "")}
        </div>
        {renderInput("Correo electronico", "email", "john.doe@company.com", "email")}
        {renderInput("Contraseña", "password", "•••••••••", "password")}
        {renderInput("Confirmar contraseña", "confirm_password", "•••••••••", "password")}
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className={`${labelStyles} ml-2 text-sm font-medium text-gray-900 dark:text-gray-300`}
          >
            Estoy de acuerdo con los
            <a href="#" className={linkStyles}>
              , terminos y condiciones
            </a>
            
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Enviar
        </button>
      </form>
    </Flowbite>
  );
};

export default SectionContacto;
