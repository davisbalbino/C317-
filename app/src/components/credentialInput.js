import React, { useState } from "react";
import './css/credentials.css'

const CredentialInput = ({ label, onChange, type="text" }) => {
  const [value, setValue] = useState("");

  const handleInputChange = (e) => {
    setValue(e.target.value);
    onChange(e.target.value); // Passa o valor atualizado para o callback do pai
  };

  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <input
        className="custom-input"
        type={type}
        value={value}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default CredentialInput;
