import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./Login.css";
import logo from "../../assets/capitalis-logo.png";
import CredentialInput from "../../components/credentialInput.js";
import ButtonSubmit from "../../components/buttonSubmit.js";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Swal = require("sweetalert2");

  const userTeste = {
    email: "user@user.com",
    password: "senha1234!",
    name: "user",
    is_adm: true,
  };
  const userTesteNotAdmin = {
    email: "usernotadmin@user.com",
    password: "senha1234!",
    name: "user",
    is_adm: false,
  };


  const navigate = useNavigate();

  const handleSubmit = async (e) => {
   
    try {
      const response = await fetch(
        "https://api-c317-production.up.railway.app/users",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
         console.log('entrei aqui if')
        let data = await response.json();
        data = data.filter((item) => item.email == email);
        console.log(data)

        if (data.length > 0) {
           console.log('entrei aqui if if')
          navigate("/homepage", { state: { user: data[0] } });
        } else {
           console.log('entrei aqui if else')
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Credenciais inválidas",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } else {
         console.log('entrei aqui else')
        if (email === userTeste.email && password === userTeste.password) {
          console.log('entrei aqui else if')
          navigate("/homepage", { state: { user: userTeste } });
          return
        } else  if (email === userTesteNotAdmin.email && password === userTesteNotAdmin.password) {
          console.log('entrei aqui else if else ')
          navigate("/homepage", { state: { user: userTesteNotAdmin } });
          return
        }
      }
    } catch (error) {
      if (email === userTeste.email && password === userTeste.password) {
        console.log('entrei aqui')
        navigate("/homepage", { state: { user: userTeste } });
        return
      } else if (email === userTesteNotAdmin.email && password === userTesteNotAdmin.password) {
        console.log('entrei aqui')
        navigate("/homepage", { state: { user: userTesteNotAdmin } });
        return
      } 
      
    }
    if (email === userTeste.email && password === userTeste.password) {
      navigate("/homepage");
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        handleSubmit();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [email, password]);

  return (
    <div className="login-container">
      <div className="login-logo">
        <img alt="Logo Capitalis" src={logo} />
        <h1>Metificando a Felicidade</h1>
      </div>
      <div className="login-form">
        <h1>Capitalis</h1>
        <div className="login-credentials">
          <CredentialInput
            label={"E-mail:"}
            onChange={setEmail}
          ></CredentialInput>
          <CredentialInput
            type="password"
            label={"Password:"}
            onChange={setPassword}
          ></CredentialInput>
        </div>

        <ButtonSubmit
          className="login-submit"
          onClick={handleSubmit}
          label={"Login"}
        />
      </div>
    </div>
  );
};

export default Login;
