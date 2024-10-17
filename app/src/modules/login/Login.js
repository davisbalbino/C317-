import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router";
import './Login.css'
import logo from '../../assets/capitalis-logo.png';
import CredentialInput from "../../components/credentialInput.js";
import ButtonSubmit from "../../components/buttonSubmit.js";
import Swal from 'sweetalert2'



const Login = () =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const Swal = require('sweetalert2')

    const userTeste = {
        email:'user@user.com',
        password:'senha1234!'
    }

    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        if(email === userTeste.email && password === userTeste.password){
            navigate('/homepage')
        }else(
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Credenciais inválidas",
                showConfirmButton: false,
                timer: 1500
              })
        )
        
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Enter') {
                handleSubmit();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [email, password]); 


  return (
    <div className="login-container">
        <div className="login-logo">
            <img alt="Logo Capitalis" src = {logo}/>
            <h1>Metificando a Felicidade</h1>
        </div>
        <div className="login-form">
            <h1>
                Capitalis
            </h1>
            <div className = 'login-credentials'>
                <CredentialInput label={'E-mail:'} onChange={setEmail} ></CredentialInput>
                <CredentialInput type="password" label={'Password:'} onChange={setPassword}></CredentialInput>
            </div>

            <ButtonSubmit className='login-submit'  onClick={handleSubmit} label={'Login'}/>
        </div>
    </div>
  );
}

export default Login;
