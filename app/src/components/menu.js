import React from "react";
import './css/menu.css';

const Menu = ({page,set,isAdm}) => {

    const options = isAdm?['Pesquisas a Responder', 'Pesquisas Respondidas', 'Cadastro de Colaborador', 'Criar Pesquisas']:['Pesquisas a Responder', 'Pesquisas Respondidas']


  return (
    <div className="menu-container">
        
        <div className="container-title">
            <span>Menu</span>
        </div>
        <div className="menu-options">
            {options.map((option, index) => (
                
            <div key={index} option={option} onClick={() => set(option)} className={`menu-option ${option==page?'active':''}`}>
                {option}
            </div>
            ))}
        </div>
        <div className="container-configuration">
            <span>Configuração</span>
        </div>
        
    </div>
  );
}

export default Menu;
