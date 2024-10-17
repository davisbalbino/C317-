import React, { useState } from "react";
import "./homePage.css";
import Header from "../../components/header";
import Menu from "../../components/menu";
import Dashboard from "../../components/dashboard";

const HomePage = () => {
  const [page, setPage] = useState("Pesquisas a responder");

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
      <Header />
      <Menu page={page} set={setPage} />
      <div className="home-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default HomePage;
