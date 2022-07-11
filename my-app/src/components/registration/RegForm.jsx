import React from "react";
import "./RegForm.css";
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import InputDetail from "../shared/Input";

function RegForm() {
  return (
    <Form>
      <div className="heading">
        <h2 className="title">Sign Up</h2>
        <p className="sub-title">It's quick and easy</p>
      </div>
      <hr />
            <Label for="exampleEmail"></Label>
            <InputDetail type="text" id="first-name" placeholder="First name" />
            <InputDetail type="text" id="last-name" placeholder="Last name" />
            <Input type="email" name="email" id="email" placeholder="Mobile number or email" />
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword"></Label>
            <Input type="password" name="password" id="password" placeholder="New ppassword" />

          </FormGroup>
        </Col>
        <Button>Sign in</Button>
    </Form>
  );
}

export default RegForm;