import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../api";
import { getAllPosts } from "../../api/post";
import { userOptions } from "../../assets/SidebarDetails";
import Dashboard from "../reuse/Dashboard";

function UserHome() {
  const [values, setValues] = useState({
    message: "",
    success: false,
    loading: false,
    error: "",
    redirect: false,
  });
  const [posts, setPosts] = useState([]);
  const { error, loading, success, message, redirect } = values;
  // const { user } = isAuthenticated();
  const { user } = isAuthenticated();
  const adminAction = userid => {};

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
  useEffect(async () => {
    const allPosts = await getAllPosts(user._id);
    setPosts(allPosts);
  }, []);

  const showAllUsers = () => {
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Post Type</th>
            <th>Author</th>
            <th>Likes</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, id) => {
            return (
              <tr key={post._id}>
                <td>{id + 1}</td>
                <td>{post.title}</td>
                <td>{post.postType}</td>
                <td>{post.author.firstName}</td>
                <td>{post.like}</td>
                <td>{post.updatedAt}</td>
                <td>
                  <Link
                    to={`/admin/dashboard/update/${post._id}`}
                    variant="info"
                  >
                    <Button variant="info">Update</Button>
                  </Link>{" "}
                  <Button
                    variant="danger"
                    onClick={() => adminAction(post._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}

          {/* <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </Table>
    );
  };
  return (
    <Dashboard options={userOptions}>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <h3>All post by: {user.firstName}</h3>
          {/* {loading && <Loading variant="info" />} */}
          {showError()}
          {showSuccess()}
          {showAllUsers()}
        </Col>
      </Row>
    </Dashboard>
  );
}

export default UserHome;
