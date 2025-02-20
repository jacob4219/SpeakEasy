import React from "react";

const Button = ({ onClick, children, className = "" }) => {
  return (
    <button 
      onClick={onClick} 
      className={`px-4 py-2 border rounded bg-blue-500 text-white hover:bg-blue-600 transition ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;