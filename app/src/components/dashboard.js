import React from "react";
import './css/dashboard.css';
import Sign from "./sign";
import Search from "./search";
import SearchAnswer from "./searchAswer";
import AnsweredSearch from "./answaredSearch";


const Dashboard = ({title}) => {
  return (
    <div className="dashboard-container">
        <div className="dashboard-title">
            <spam>{title}</spam>
        </div>
        <div className="dashboard-content">
            {title=='Cadastro de Colaborador'?<Sign/>:<></>}
            {title=='Criar Pesquisas'?<Search/>:<></>}
            {title == 'Pesquisas a Responder'? <SearchAnswer/>:<></>}
            {title == 'Pesquisas Respondidas'? <AnsweredSearch/>:<></>}
        </div>

    </div>
  );
}

export default Dashboard;
