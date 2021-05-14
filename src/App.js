import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Login from "./components/auth/login/Login";
import AdminRoute from "./hoc/AdminRoute";

import AdminHome from "./components/admin/AdminHome";
import CreateUser from "./components/admin/user/CreateUser";
import AllUsers from "./components/admin/user/AllUsers";
import UpdateUser from "./components/admin/user/UpdateUser";
import PrivateRoute from "./hoc/PrivateRoute";
import UserHome from "./components/user/UserHome";
import AddPost from "./components/user/AddPost";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />

          <PrivateRoute path="/user/dashboard" exact component={UserHome} />
          <PrivateRoute
            path="/user/dashboard/addpost"
            exact
            component={AddPost}
          />
          <AdminRoute path="/admin/dashboard" exact component={AdminHome} />
          <AdminRoute
            path="/admin/dashboard/createuser"
            exact
            component={CreateUser}
          />
          <AdminRoute
            path="/admin/dashboard/users"
            exact
            component={AllUsers}
          />
          <AdminRoute
            path="/admin/dashboard/update/:userid"
            exact
            component={UpdateUser}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
