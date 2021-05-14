import React, { useRef } from "react";
import { Col, Form } from "react-bootstrap";
import Feedback from "../validation/Feedback";
import { Editor } from "@tinymce/tinymce-react";
function FormControl({
  label,
  name,
  type,
  value,
  handleChange,
  touch,
  error,
  values,
  options,
}) {
  const handleEditor = e => {
    values[name] = e;
  };
  const getSelectForm = () => (
    <Form.Group as={Col} md="12" controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        size="lg"
        as={type}
        name={name}
        value={value}
        onChange={handleChange}
        isValid={touch && !error}
        isInvalid={!!error}
        custom
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Form.Control>
      <Feedback type="valid" text="Looks good!" />
      <Feedback type="invalid" text={error} />
    </Form.Group>
  );
  const getEditor = () => (
    <Form.Group as={Col} md="12" controlId={name}>
      <Form.Label>{label}</Form.Label>
      <Editor
        initialValue=""
        init={{
          height: 500,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formatselect | " +
            "bold italic backcolor | alignleft aligncenter " +
            "alignright alignjustify | bullist numlist outdent indent | " +
            "removeformat | help",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
        onEditorChange={handleEditor}
        apiKey="30nelpd2rcornkqvkfxbdl6740pcxrwaheczvtqkmm5ygwae"
      />
    </Form.Group>
  );
  const showForm = () => {
    if (type === "select") {
      return getSelectForm();
    } else if (type === "editor") {
      return getEditor();
    }
    return (
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
    );
  };
  return <Form.Row>{showForm()}</Form.Row>;
}

export default FormControl;
