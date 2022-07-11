import React from "react";
import InputDetail from "../shared/Input";
import RegButton from "../shared/Button";

function LoginForm() {
  return (
      <div className="form-container">
        <InputDetail type="text" placeholder="Email address or phone number" />
        <InputDetail type="password" placeholder="Password" />
        <RegButton type="Register" />
    </div>
  );
}

export default LoginForm;