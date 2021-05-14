import { Box, Card, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import Dashboard from "../reuse/Dashboard";
import { getAllUsers } from "../../api/user";
import { Alert } from "react-bootstrap";
import Details from "./details/Details";
import { adminOptions } from "../../assets/SidebarDetails";

function AdminHome() {
  const [values, setValues] = useState({
    totalUsers: 0,
    totalPosts: 0,
    error: "",
  });
  const { totalUsers, totalPosts, error } = values;

  useEffect(() => {
    getAllUsers()
      .then(res => {
        if (res.error) {
          setValues({ ...values, error: res.error });
        } else {
          setValues({ ...values, totalUsers: res.length });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
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

  return (
    <Dashboard options={adminOptions}>
      <div className="admin__dashboard" style={{ margin: "20px" }}>
        {showError()}
        <Grid container spacing={3}>
          <Details
            Icon={GroupAddIcon}
            backColor="#120E43"
            text="Total Users"
            numbers={totalUsers}
          />
          <Details
            Icon={LibraryBooksIcon}
            backColor="#38CC77"
            text="Total Posts"
            numbers={totalPosts}
          />
          <Details
            Icon={GroupAddIcon}
            backColor="#120E43"
            text="Total Users"
            numbers={totalUsers}
          />
          <Details
            Icon={LibraryBooksIcon}
            backColor="#38CC77"
            text="Total Posts"
            numbers={totalPosts}
          />
        </Grid>
      </div>
    </Dashboard>
  );
}

export default AdminHome;
