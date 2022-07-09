import React from 'react';
import LoginForm from "../../components/login/LoginForm";
import "./login.css";

function Login() {
  return (
    <div className="row">
     <div className="facebook">
       <img
        className="logoImg"
        src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
        alt="Facebook"
       />
       <h2 className="title">
        Facebook helps you connect and share with the people in your life.
       </h2>
    </div>
    <div className="login-form">
      <LoginForm />
    </div>
    </div>
  );
}

export default Login;