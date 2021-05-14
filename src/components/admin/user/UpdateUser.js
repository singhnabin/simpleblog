import React, { useState, useEffect } from "react";
import Dashboard from "../../reuse/Dashboard";
import { Formik } from "formik";
import { isAuthenticated } from "../../../api";
import { updateSchema } from "../../../assets/authSchema";
import { updateUserForm } from "../../../assets/FormJson";
import FormButton from "../../reuse/form/FormButton";
import FormControl from "../../reuse/form/FormControl";
import { Alert, Col, Container, Form, Row } from "react-bootstrap";
import { getUser, updateUser } from "../../../api/user";
import { adminOptions } from "../../../assets/SidebarDetails";

function UpdateUser({ match }) {
  const { token } = isAuthenticated();
  const [values, setValues] = useState({
    message: "",
    success: false,
    loading: false,
    error: "",
    redirect: false,
  });
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: 0,
  });
  const { error, loading, success, message, redirect } = values;
  const { firstName, lastName, email, role } = user;

  const preload = userId => {
    getUser(userId)
      .then(res => {
        if (res.error) {
          setValues({ ...values, error: res.error });
        } else {
          setUser({
            ...user,
            firstName: res.firstName,
            lastName: res.lastName,
            email: res.email,
            role: res.role,
          });
          setValues({ ...values, success: true });
        }
      })
      .catch(err => {
        setValues({ ...values, error: err.error });
      });
  };

  useEffect(() => {
    preload(match.params.userid);
  }, [match]);

  const submit = data => {
    setValues({ ...values, loading: true });
    updateUser(match.params.userid, data)
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
      <Alert variant="danger" style={{ display: error ? "" : "none" }}>
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
        validationSchema={updateSchema}
        onSubmit={(values, { resetForm }) => {
          return submit(values, resetForm);
        }}
        initialValues={user}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          isSubmitting,
          touched,
          errors,
        }) => (
          // {console.log(values[user.name])}

          <Form noValidate onSubmit={handleSubmit}>
            {updateUserForm.map(user => (
              <FormControl
                option={user.option}
                key={user.name}
                label={user.label}
                type={user.type}
                name={user.name}
                handleChange={handleChange}
                touch={touched[user.name]}
                error={errors[user.name]}
                value={values[user.name]}
              />
            ))}

            <FormButton
              isSubmitting={isSubmitting}
              errors={errors}
              text="Update"
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
            <h3>Update User from Here</h3>
            {/* {loading && <Loading variant="info" />} */}
            {showSuccess()}
            {showError()}
            {success && signInForm()}
          </Col>
        </Row>
      </Container>
    </Dashboard>
  );
}

export default UpdateUser;
