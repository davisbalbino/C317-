import React, { useState } from "react";
import "./css/search.css";
import MultipleChoice from "./multipleChoice";
import SingleChoice from "./singleChoice";
import TextField from "./textField";

const Swal = require("sweetalert2");

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


 let isMenuLeftOpen = true 
  const handleHideleft = () =>{
    if(isMenuLeftOpen){
      document.querySelector('.search-info-card').style.opacity = '0'
      isMenuLeftOpen = !isMenuLeftOpen
    }else{
      document.querySelector('.search-info-card').style.opacity = '1'
      isMenuLeftOpen = !isMenuLeftOpen
    }
  }
  let isMenuRightOpen = true 
  const handleHideRigth = () =>{
    if(isMenuRightOpen){
      document.querySelector('.search-options').style.opacity = '0'
      isMenuRightOpen = !isMenuRightOpen
    }else{
      document.querySelector('.search-options').style.opacity = '1'
      isMenuRightOpen = !isMenuRightOpen
    }
  }

  const generateJSON = () => {
    const surveyData = {
      title,
      group,
      color,
      image,
      components,
    };

    const existingData =
      JSON.parse(localStorage.getItem("surveyDataList")) || [];

    const updatedData = [...existingData, surveyData];

    localStorage.setItem("surveyDataList", JSON.stringify(updatedData));
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Pesquisa Cadastrada com sucesso",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="search-container">
      <div className="search-left">
        <div className="search-info-card">
          <input
            placeholder="Título da Pesquisa"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            placeholder="Grupo"
            onChange={(e) => setGroup(e.target.value)}
          />
        </div>
        <div className="add-new-option" onClick={handleHideleft}>+</div>
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
                <TextField onUpdate={(data) => updateComponent(index, data)} />
              )}
            </div>
          ))}
        </div>
        <div className="submit">
          <button onClick={generateJSON}>Submit</button>
        </div>
      </div>

      <div className="search-right">
        <div className="search-options">
          <span onClick={() => addComponent("multiple")}>
            Campo de múltipla escolha
          </span>
          <span onClick={() => addComponent("single_field")}>
            Campo de escolha única
          </span>
          <span onClick={() => addComponent("text_field")}>Campo de texto</span>
        </div>
        <div className="add-new-option" onClick={handleHideRigth}>+</div>
      </div>
    </div>
  );
};

export default Search;
