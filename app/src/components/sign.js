import React, { useState } from "react";
import './css/sign.css';

const Sign = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    sector: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  return (
    <div className="sign-container">
      <input 
        type="text" 
        name="name" 
        value={formData.name} 
        onChange={handleInputChange} 
        className="info" 
        placeholder="Nome" 
      />
      <input 
        type="email" 
        name="email" 
        value={formData.email} 
        onChange={handleInputChange} 
        className="info" 
        placeholder="Email" 
      />
      <input 
        type="password" 
        name="password" 
        value={formData.password} 
        onChange={handleInputChange} 
        className="info" 
        placeholder="Senha" 
      />
      <input 
        type="tel" 
        name="phone" 
        value={formData.phone} 
        onChange={handleInputChange} 
        className="info" 
        placeholder="Telefone" 
      />
      <input 
        type="text" 
        name="sector" 
        value={formData.sector} 
        onChange={handleInputChange} 
        className="info" 
        placeholder="Setor" 
      />
    </div>
  );
}

export default Sign;
