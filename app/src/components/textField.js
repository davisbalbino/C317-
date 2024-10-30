import React, { useState } from "react";
import './css/multiple.css';


const TextField = ({ onUpdate }) => {
  const [title, setTitle] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    onUpdate({ title });
  };

  return (
    <div className="text-field-container">
      <input 
        type="text" 
        placeholder="Título da pergunta de campo de texto" 
        value={title} 
        onChange={handleTitleChange} 
        className="search-title"
      />
    </div>
  );
};

export default TextField;
