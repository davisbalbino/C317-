import React from "react";
import './css/button.css'

const ButtonSubmit = ({ label }) => {
  return (
    <button className="button-submit">
        {label}
    </button>
  );
}

export default ButtonSubmit;
