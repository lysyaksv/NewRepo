import React from "react";
import { Button } from 'reactstrap';

function RegButton({name}) {
  return (
    <div>
      <Button className="btn-login">{name}</Button>
    </div>
  );
}

export default RegButton;