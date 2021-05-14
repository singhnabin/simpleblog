import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { isAuthenticated } from "../../api";
import { userOptions } from "../../assets/SidebarDetails";
import Dashboard from "../reuse/Dashboard";
// import { Editor } from "@tinymce/tinymce-react";
import FormButton from "../reuse/form/FormButton";
import FormControl from "../reuse/form/FormControl";
import { Formik } from "formik";
import { postSchema } from "../../assets/postSchema";
import { getPostInitials } from "../../utils/utils";
import { addPostForm } from "../../assets/FormJson";
import { savePost } from "../../api/post";

function AddPost() {
  const { user } = isAuthenticated();

  const submit = (values, reset) => {
    reset();
    savePost(values).then(res => {
      console.log(res);
    });
  };
  const postForm = () => {
    return (
      <Formik
        validationSchema={postSchema}
        onSubmit={(values, { resetForm }) => {
          return submit(values, resetForm);
        }}
        initialValues={getPostInitials()}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          isSubmitting,
          touched,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            {addPostForm.map(post => (
              <FormControl
                options={post.options}
                key={post.name}
                label={post.label}
                type={post.type}
                name={post.name}
                handleChange={handleChange}
                touch={touched[post.name]}
                error={errors[post.name]}
                values={values}
              />
            ))}

            <FormButton
              isSubmitting={isSubmitting}
              errors={errors}
              text="Save Post"
              variant="outline-info"
            />
          </Form>
        )}
      </Formik>
    );
  };
  return (
    <Dashboard options={userOptions}>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <h3>{user.firstName}, Add your post here!!!</h3>
          {/* {loading && <Loading variant="info" />} */}
          {/* {showError()}
          {showSuccess()}
          {showAllUsers()} */}
          {user && postForm()}
        </Col>
      </Row>
    </Dashboard>
  );
}

export default AddPost;
