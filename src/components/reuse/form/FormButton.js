import React from "react";
import { Button } from "react-bootstrap";
import "../Reuse.css";
function FormButton({ isSubmitting, errors, variant, text }) {
  return (
    <div className="formbutton">
      <Button
        variant={variant}
        type="submit"
        disabled={isSubmitting || Object.keys(errors).length > 0}
      >
        {text}
      </Button>
    </div>
  );
}

export default FormButton;
