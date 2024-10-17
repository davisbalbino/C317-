import React from "react";
import './css/dashboard.css';

const Dashboard = ({title}) => {
  return (
    <div className="dashboard-container">
        <div className="dashboard-title">
            <spam>{title}</spam>
        </div>
        <div className="dashboard-content">

        </div>

    </div>
  );
}

export default Dashboard;
