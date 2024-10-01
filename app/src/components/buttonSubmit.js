import React from "react";
import './css/button.css'

const ButtonSubmit = ({ label,onClick }) => {
  return (
    <button onClick={onClick} className="button-submit">
        {label}
    </button>
  );
}

export default ButtonSubmit;
