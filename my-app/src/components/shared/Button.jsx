import React from "react";
import { Button } from 'reactstrap';

function RegButton(props) {
  return (
    <div>
      <Button className="btn-login">{props.type}</Button>
    </div>
  );
}

export default RegButton;