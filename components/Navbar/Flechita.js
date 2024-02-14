
import React, { useState } from "react";

const Flechita = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
  return (
    <svg
    className={`w-2.5 h-2.5 ml-2.5 mt-2.5 transition-transform ${
      isDropdownOpen ? "transform rotate-180" : ""
    }`}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 6"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m1 1 4 4 4-4"
    />
  </svg>
  )
}

export default Flechita