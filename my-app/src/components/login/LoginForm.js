import React from "react";
import Input from "../shared/Input";
import Button from "../shared/Button";

function LoginForm() {
  return (
      <div className="form-container">
        <Input type="text" placeholder="Email address or phone number" />
        <Input type="password" placeholder="Password" />
        <Button />
    </div>
  );
}

export default LoginForm;