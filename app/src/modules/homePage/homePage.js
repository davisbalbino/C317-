import React, { useState } from "react";
import { useLocation } from 'react-router-dom';

import "./homePage.css";
import Header from "../../components/header";
import Menu from "../../components/menu";
import Dashboard from "../../components/dashboard";

const HomePage = () => {
  const [page, setPage] = useState("Pesquisas a responder");
  const location = useLocation();
  const user = location.state?.user.name ?? 'User';
  const isAdm = location.state?.user.is_adm ?? false;
  console.log(location.state)
  

  const renderContent = () => {
    switch (page) {
      case "Pesquisas a Responder":
        return <Dashboard title={page} />;
      case "Pesquisas Respondidas":
        return <Dashboard title={page} />;
      case "Cadastro de Colaborador":
        return <Dashboard title={page} />;
      case "Criar Pesquisas":
        return <Dashboard title={page} />;
    }
  };

  return (
    <div className="home-container">
      <Header userName = {user}/>
      <Menu page={page} isAdm = {isAdm} set={setPage} />
      <div className="home-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default HomePage;
