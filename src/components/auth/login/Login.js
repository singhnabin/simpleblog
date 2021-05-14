import React, { useState } from "react";
import { Alert, Col, Container, Form, Row, Spinner } from "react-bootstrap";

import { Formik } from "formik";

import "./login.css";
import { Redirect } from "react-router-dom";
import { loginSchema } from "../../../assets/authSchema";
import FormControl from "../../reuse/form/FormControl";
import FormButton from "../../reuse/form/FormButton";
import { loginForm } from "../../../assets/FormJson";
import { getLoginInitials } from "../../../utils/utils";
import { authenticate, isAuthenticated } from "../../../api";
// import Loading from "../../reuse/loading/Loading";
// import Submit from "../../reuse/button/Submit";
// import Label from "../../reuse/form/Label";
// import Feedback from "../../reuse/validation/Feedback";

function Login() {
  const [values, setValues] = useState({
    message: "",
    success: false,
    loading: false,
    error: "",
    redirect: false,
  });
  const { error, loading, success, message, redirect } = values;
  const { user } = isAuthenticated();
  const submit = (data, resetForm) => {
    resetForm();
    setValues({ ...values, loading: true });
    return fetch(`http://localhost:4000/api/auth/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then(response => {
        return response.json();
      })
      .then(res => {
        if (res.error) {
          setValues({ ...values, error: res.error });
        } else {
          authenticate(res, () => {
            setValues({
              ...values,
              error: "",
              loading: false,
              success: true,
              redirect: true,
            });
          });
        }
      })
      .catch(err => {
        setValues({ ...values, error: err.error });
      });
  };

  const showError = () => {
    return (
      <Alert variant="danger" style={{ display: error ? "" : "none" }}>
        {error}
      </Alert>
    );
  };
  const performRedirect = () => {
    if (redirect) {
      if (user && user.role === 1) {
        return <Redirect to="/admin/dashboard" />;
      } else {
        return <Redirect to="/user/dashboard" />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };
  const signInForm = () => {
    return (
      <Formik
        validationSchema={loginSchema}
        onSubmit={(values, { resetForm }) => {
          return submit(values, resetForm);
        }}
        initialValues={getLoginInitials()}
      >
        {({
          handleSubmit,
          handleChange,

          isSubmitting,
          touched,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            {loginForm.map(login => (
              <FormControl
                key={login.name}
                label={login.label}
                type={login.type}
                name={login.name}
                handleChange={handleChange}
                touch={touched[login.name]}
                error={errors[login.name]}
              />
            ))}

            <FormButton
              isSubmitting={isSubmitting}
              errors={errors}
              text="Login"
              variant="outline-info"
            />
          </Form>
        )}
      </Formik>
    );
  };

  return (
    <div className="login">
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <h3>Welcome to Blog</h3>
            {/* {loading && <Loading variant="info" />} */}
            {showError()}
            {performRedirect()}
            {signInForm()}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
