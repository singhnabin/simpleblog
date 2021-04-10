import React, { Fragment, useState } from "react";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";

import { Formik } from "formik";

import "./Signup.css";
import { Link } from "react-router-dom";
import { loginSchema, signUpSchema } from "./authSchema";
import FormControl from "../../reuse/form/FormControl";
import FormButton from "../../reuse/form/FormButton";
// import Loading from "../../reuse/loading/Loading";
// import Submit from "../../reuse/button/Submit";
// import Label from "../../reuse/form/Label";
// import Feedback from "../../reuse/validation/Feedback";

const initialState = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};

function Signup({ match }) {
  let type = false;
  if (match.params.type === "signin") type = true;

  const [values, setValues] = useState(initialState);
  const { error, loading, success, message } = values;

  const submit = (formData, resetForm) => {
    setValues({ ...values, loading: true });
    //api call
    console.log("form values: " + values);
    return fetch(
      "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-recommendations?symbol=INTC",
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "beae48feb5msha197ef561c1d8b6p1c3359jsn94c2ba77b761",
          "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        },
      }
    )
      .then(response => {
        return response.json();
      })
      .then(res => console.log(res))
      .catch(err => {
        console.error(err);
      });
    resetForm();
  };

  const successMessage = () => {
    return (
      <Alert variant="success" style={{ display: success ? "" : "none" }}>
        {message}, Click to <Link to="/login">Login</Link>
      </Alert>
    );
  };
  const showError = () => {
    return (
      <Alert variant="danger" style={{ display: error ? "" : "none" }}>
        {error}
      </Alert>
    );
  };

  const signInForm = () => {
    return (
      <Formik
        validationSchema={type ? signUpSchema : loginSchema}
        onSubmit={(values, { resetForm }) => {
          return submit(values, resetForm);
        }}
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          password: "",
        }}
      >
        {({
          handleSubmit,
          handleChange,

          isSubmitting,
          values,
          touched,

          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            {type && (
              <Fragment>
                <FormControl
                  label="First Name"
                  type="text"
                  name="firstname"
                  handleChange={handleChange}
                  touch={touched.firstname}
                  error={errors.firstname}
                />

                <FormControl
                  label="Last Name"
                  type="text"
                  name="lastname"
                  handleChange={handleChange}
                  touch={touched.lastname}
                  error={errors.lastname}
                />
              </Fragment>
            )}

            <FormControl
              label="Email"
              type="email"
              name="email"
              handleChange={handleChange}
              touch={touched.email}
              error={errors.email}
            />
            <FormControl
              label="Passsword"
              type="password"
              name="password"
              handleChange={handleChange}
              touch={touched.password}
              error={errors.password}
            />

            <FormButton
              isSubmitting={isSubmitting}
              errors={errors}
              text={type ? "Sign up" : "Login"}
              variant="outline-info"
            />
          </Form>
        )}
      </Formik>
    );
  };

  return (
    <div className="signup">
      <Container>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <h3>Welcome to Blog</h3>
            {/* {loading && <Loading variant="info" />} */}
            {showError()}
            {successMessage()}
            {signInForm()}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signup;
