import React, { useState } from "react";
import './css/sign.css';
import ButtonSubmit from "./buttonSubmit";

const Sign = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    sector: '',
    gender: '', // F, M ou Outro
    isAdmin: false
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Monta o corpo da requisição
    const requestBody = {
      name: formData.name,
      phone_number: formData.phone,
      email: formData.email,
      password: formData.password,
      role: 'user', // ou conforme necessário
      is_adm: formData.isAdmin
    };

    try {
      const response = await fetch('http://127.0.0.1:5000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      if (response.ok) {
        const data = await response.json();
        alert('Usuário cadastrado com sucesso:', data);
      } else {
        alert('Erro ao cadastrar usuário:', response.statusText);
      }
    } catch (error) {
      alert('Erro na requisição:', error);
    }
    try {
      const response = await fetch('http://127.0.0.1:5000/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (response.ok) {
        const data = await response.json();
        alert('Usuário cadastrado com sucesso:', data);
      } else {
        alert('Erro ao cadastrar usuário:', response.statusText);
      }
    } catch (error) {
      alert('Erro na requisição:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
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
      
      <select 
        name="gender" 
        value={formData.gender} 
        onChange={handleInputChange} 
        
      >
        <option value="">Selecione o sexo</option>
        <option value="F">Feminino</option>
        <option value="M">Masculino</option>
        <option value="Outro">Outro</option>
      </select>

      <label>
        <input 
          type="checkbox" 
          name="isAdmin" 
          checked={formData.isAdmin} 
          onChange={handleInputChange} 
        />
        Admin
      </label>
      <ButtonSubmit label='Cadsatrar' onClick={handleSubmit} />
    </div>
    
  );
}

export default Sign;
