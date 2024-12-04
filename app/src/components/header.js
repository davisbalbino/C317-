import React from "react";
import "./css/header.css";
import logo from "../assets/capitalis-logo.png";
import user from "../assets/user.jpeg";

let flagMenu = false;
const handlerImgClick = () => {
  if (flagMenu) {
    flagMenu = !flagMenu;
    document.querySelector(".menu-container").style.display = "none";
  } else {
    document.querySelector(".menu-container").style.display = "flex";
    flagMenu = !flagMenu;
  }
};

const Header = ({ userName }) => {
  return (
    <div className="header-container">
      <div className="header-left">
        <img src={logo} onClick={handlerImgClick} />
        <span>Capitalis</span>
      </div>
      <div className="header-right">
        <span>Welcome, {userName.split(" ")[0]}</span>
        <img src={user} />
      </div>
    </div>
  );
};

export default Header;
