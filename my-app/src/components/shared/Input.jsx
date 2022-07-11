import React from "react";
import { Input } from "reactstrap";

function InputDetail (props) {
  return <Input type={props.type} placeholder={props.placeholder} />;
}

export default InputDetail;
