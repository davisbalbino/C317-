import React, { useState } from "react";
import './css/search.css';
import MultipleChoice from './multipleChoice';
import SingleChoice from './singleChoice';
import TextField from './textField';

const Search = () => {
  const [color, setColor] = useState("#FFF");
  const [components, setComponents] = useState([]);
  const [title, setTitle] = useState("");
  const [group, setGroup] = useState("");
  const [image, setImage] = useState("");

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const addComponent = (type) => {
    setComponents([...components, { type, title: "", options: [] }]);
  };

  const updateComponent = (index, newData) => {
    const updatedComponents = [...components];
    updatedComponents[index] = { ...updatedComponents[index], ...newData };
    setComponents(updatedComponents);
  };

  const generateJSON = () => {
    const surveyData = {
      title,
      group,
      color,
      image,
      components
    };
  
    const existingData = JSON.parse(localStorage.getItem("surveyDataList")) || [];
  
    const updatedData = [...existingData, surveyData];
  
    localStorage.setItem("surveyDataList", JSON.stringify(updatedData));
    
    console.log("Dados atualizados e salvos no localStorage:", updatedData);
  };

  return (
    <div className="search-container">
      <div className="search-left">
        <div className="search-info-card">
          <input placeholder="Título da Pesquisa" onChange={(e) => setTitle(e.target.value)} />
          <input placeholder="Grupo" onChange={(e) => setGroup(e.target.value)} />
          <input 
            placeholder="Cor Tema" 
            type="color" 
            value={color} 
            onChange={handleColorChange}
          />
          <input placeholder="Imagem" onChange={(e) => setImage(e.target.value)} />
        </div>
      </div>

      <div className="search-content">
        <div className="search-componentes">
          {components.map((component, index) => (
            <div key={index}>
              {component.type === "multiple" && (
                <MultipleChoice 
                  onUpdate={(data) => updateComponent(index, data)} 
                />
              )}
              {component.type === "single_field" && (
                <SingleChoice 
                  onUpdate={(data) => updateComponent(index, data)} 
                />
              )}
              {component.type === "text_field" && (
                <TextField 
                  onUpdate={(data) => updateComponent(index, data)} 
                />
              )}
            </div>
          ))}
        </div>
        <div className="submit">
          <button onClick={generateJSON}>Gerar JSON</button>
        </div>
      </div>

      <div className="search-right">
        <div className="search-options">
          <span onClick={() => addComponent("multiple")}>Campo de múltipla escolha</span>
          <span onClick={() => addComponent("single_field")}>Campo de escolha única</span>
          <span onClick={() => addComponent("text_field")}>Campo de texto</span>
        </div>
        <button>+</button>
      </div>
    </div>
  );
}

export default Search;
