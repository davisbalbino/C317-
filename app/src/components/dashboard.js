import React from "react";
import './css/dashboard.css';
import Sign from "./sign";

const Dashboard = ({title}) => {
  return (
    <div className="dashboard-container">
        <div className="dashboard-title">
            <spam>{title}</spam>
        </div>
        <div className="dashboard-content">
            {title=='Cadastro de Colaborador'?<Sign/>:<></>}
        </div>

    </div>
  );
}

export default Dashboard;
