import React from "react";
import { Input } from "reactstrap";

function InputDetail ({type, placeholder}) {
  return <Input type={type} placeholder={placeholder} />;
}

export default InputDetail;
