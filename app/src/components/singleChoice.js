import React, { useState } from "react";
import './css/multiple.css';


const SingleChoice = ({ onUpdate }) => {
  const [title, setTitle] = useState("");
  const [options, setOptions] = useState([""]);

  const handleOptionChange = (index, event) => {
    const newOptions = [...options];
    newOptions[index] = event.target.value;
    setOptions(newOptions);
    onUpdate({ title, options: newOptions });
  };

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const removeOption = (index) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
    onUpdate({ title, options: newOptions });
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    onUpdate({ title, options });
  };

  return (
    <div className="single-choice-container">
      <input 
        type="text" 
        placeholder="Título da pergunta de escolha única" 
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
};

export default SingleChoice;
