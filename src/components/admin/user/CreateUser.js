import React, { useState } from "react";
import Dashboard from "../../reuse/Dashboard";
import { Formik } from "formik";
import { isAuthenticated } from "../../../api";
import { signUpSchema } from "../../../assets/authSchema";
import { getUserInitials } from "../../../utils/utils";
import { createUserForm } from "../../../assets/FormJson";
import FormButton from "../../reuse/form/FormButton";
import FormControl from "../../reuse/form/FormControl";
import { Alert, Col, Container, Form, Row } from "react-bootstrap";
import { createUser } from "../../../api/user";
import { adminOptions } from "../../../assets/SidebarDetails";

function CreateUser() {
  const { user, token } = isAuthenticated();
  const [values, setValues] = useState({
    message: "",
    success: false,
    loading: false,
    error: "",
    redirect: false,
  });
  const { error, loading, success, message, redirect } = values;

  const submit = (data, resetForm) => {
    resetForm();
    setValues({ ...values, loading: true });
    createUser(data)
      .then(res => {
        if (res.error) {
          setValues({ ...values, error: res.error });
        } else {
          setValues({ ...values, message: res.message, success: true });
        }
      })
      .catch(err => {
        setValues({ ...values, error: err.error });
      });
  };

  const showError = () => {
    return (
      <Alert
        variant="danger"
        style={{ display: error ? "" : "none", textAlign: "center" }}
      >
        {error}
      </Alert>
    );
  };

  const showSuccess = () => {
    return (
      <Alert variant="success" style={{ display: message ? "" : "none" }}>
        {message}
      </Alert>
    );
  };
  //   const performRedirect = () => {
  //     if (redirect) {
  //       if (user && user.role === 1) {
  //         return <Redirect to="/admin/dashboard" />;
  //       } else {
  //         return <Redirect to="/user/dashboard" />;
  //       }
  //     }

  //   };
  const signInForm = () => {
    return (
      <Formik
        validationSchema={signUpSchema}
        onSubmit={(values, { resetForm }) => {
          return submit(values, resetForm);
        }}
        initialValues={getUserInitials()}
      >
        {({
          handleSubmit,
          handleChange,

          isSubmitting,
          touched,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            {createUserForm.map(login => (
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
              text="Create"
              variant="outline-info"
            />
          </Form>
        )}
      </Formik>
    );
  };

  return (
    <Dashboard options={adminOptions}>
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <h3>Create User from Here: {user.firstName}</h3>
            {/* {loading && <Loading variant="info" />} */}
            {showError()}
            {showSuccess()}
            {user.role === 1 && signInForm()}
          </Col>
        </Row>
      </Container>
    </Dashboard>
  );
}

export default CreateUser;
