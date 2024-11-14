import React from "react";
import './css/header.css';
import logo from '../assets/capitalis-logo.png';
import user  from '../assets/user.jpeg';
const Header = ({userName}) => {
  return (
    <div className="header-container">
        <div className="header-left">
            <img src={logo}/>
            <span>Capitalis</span>
        </div>
        <div className="header-right">
            <span>Welcome, {userName.split(' ')[0]}</span>
            <img src={user}/>
        </div>
    </div>
  );
}

export default Header;
