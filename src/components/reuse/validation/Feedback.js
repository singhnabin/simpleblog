import React from "react";
import { Form } from "react-bootstrap";

function Feedback({ type, text }) {
  return <Form.Control.Feedback type={type}>{text}</Form.Control.Feedback>;
}

export default Feedback;
