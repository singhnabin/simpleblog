import React from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
import Feedback from "../validation/Feedback";
function FormControl({ label, name, type, value, handleChange, touch, error }) {
  return (
    <Form.Row>
      <Form.Group as={Col} md="12" controlId={name}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          size="lg"
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          isValid={touch && !error}
          isInvalid={!!error}
        />
        <Feedback type="valid" text="Looks good!" />
        <Feedback type="invalid" text={error} />
      </Form.Group>
    </Form.Row>
  );
}

export default FormControl;
