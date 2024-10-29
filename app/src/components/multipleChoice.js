import React, { useState, useEffect } from "react";
import './css/multiple.css';

const MultipleChoice = ({ onUpdate }) => {
  const [title, setTitle] = useState(""); 
  const [options, setOptions] = useState([""]);

  // Use Effect para atualizar o componente pai sempre que title ou options mudarem
  useEffect(() => {
    onUpdate({ title, options });
  }, [title, options, onUpdate]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleOptionChange = (index, event) => {
    const newOptions = [...options];
    newOptions[index] = event.target.value;
    setOptions(newOptions);
  };

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const removeOption = (index) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  return (
    <div className="multiple-container">
      <input 
        type="text" 
        placeholder="Título da pergunta" 
        value={title} 
        onChange={handleTitleChange} 
        className="search-title"
      />
      {options.map((option, index) => (
        <div key={index} className="option-item">
          <input 
            type="text" 
            placeholder={`Opção ${index + 1}`} 
            value={option} 
            onChange={(event) => handleOptionChange(index, event)} 
          />
          <button onClick={() => removeOption(index)}>-</button>
        </div>
      ))}
      <button className="add-option" onClick={addOption}>Adicionar Opção</button>
    </div>
  );
}

export default MultipleChoice;
