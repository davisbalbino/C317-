import React from "react";
import './Login.css'
import logo from '../../assets/capitalis-logo.png';
import CredentialInput from "../../components/credentialInput.js";
import ButtonSubmit from "../../components/buttonSubmit.js";

const Login = () =>{
  return (
    <div className="login-container">
        <div className="login-logo">
            <img src = {logo}/>
            <h1>Aqui você faz a diferença</h1>
        </div>
        <div className="login-form">
            <h1>
                Capitalis
            </h1>
            <div className = 'login-credentials'>
                <CredentialInput label={'E-mail:'}></CredentialInput>
                <CredentialInput label={'Password:'}></CredentialInput>
            </div>

            <ButtonSubmit className='login-submit' label={'Login'}/>

        </div>
    </div>
  );
}

export default Login;
