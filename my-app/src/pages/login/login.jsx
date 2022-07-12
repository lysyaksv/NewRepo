import React from 'react';
import LoginForm from "../../components/login/LoginForm";
import "./login.css";
import Heading from '../../components/login/Heading';

function Login() {
  return (
    <div className="row">
      <Heading />
    <div className="login-form">
      <LoginForm />
    </div>
    </div>
  );
}

export default Login;