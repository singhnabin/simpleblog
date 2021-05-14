import React, { useState, useEffect, useReducer } from "react";
import { Alert, Button, Col, Container, Row, Table } from "react-bootstrap";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../../api";
import { deleteUser, getAllUsers } from "../../../api/user";
import { adminOptions } from "../../../assets/SidebarDetails";
import { reducer } from "../../../hooks/user";
import Dashboard from "../../reuse/Dashboard";
const getRole = role => {
  return role === 1 ? "Admin" : "User";
};
function AllUsers() {
  const [values, setValues] = useState({
    message: "",
    success: false,
    loading: false,
    error: "",
    redirect: false,
  });
  const [users, setUsers] = useState([]);
  const { error, loading, success, message, redirect } = values;
  // const { user } = isAuthenticated();

  const adminAction = userid => {
    deleteUser(userid)
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
  useEffect(() => {
    getAllUsers().then(res => {
      if (res.error) {
        setValues({ ...values, error: res.error });
      } else {
        setUsers([...res]);
        setValues({ ...values, message: res.message, success: true });
      }
    });
  }, [users]);

  const showAllUsers = () => {
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Role</th>
            <th>Admin Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, id) => {
            return (
              <tr key={user._id}>
                <td>{id + 1}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{getRole(user.role)}</td>
                <td>
                  <Link
                    to={`/admin/dashboard/update/${user._id}`}
                    variant="info"
                  >
                    <Button variant="info">Update</Button>
                  </Link>{" "}
                  <Button
                    variant="danger"
                    onClick={() => adminAction(user._id)}
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
    <Dashboard options={adminOptions}>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <h3>List of all users</h3>
          {/* {loading && <Loading variant="info" />} */}
          {showError()}
          {showSuccess()}
          {showAllUsers()}
        </Col>
      </Row>
    </Dashboard>
  );
}

export default AllUsers;
