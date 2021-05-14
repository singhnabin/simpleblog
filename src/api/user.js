import axios from "axios";
import { isAuthenticated } from ".";

// const API = axios.create({ baseURL: "http://localhost:4000/api" });
const API = `http://localhost:4000/api`;
const { token } = isAuthenticated();
export const getAllUsers = () => {
  return fetch(`${API}/users`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
      // setValues({ ...values, error: err.error });
    });
};

export const deleteUser = userid => {
  return fetch(`http://localhost:4000/api/users/${userid}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};
export const signout = next => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
    next();
    return fetch(`http://localhost:4000/api/auth/signout`, {
      method: "GET",
    })
      .then(res => console.log("signout successful"))
      .catch(err => console.log(err));
  }
};
export const getUser = userId => {
  return fetch(`http://localhost:4000/api/users/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

export const updateUser = (userid, data) => {
  return fetch(`http://localhost:4000/api/users/${userid}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};

export const createUser = data => {
  return fetch(`http://localhost:4000/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
    // headers: {
    //   Authorization: `Bearer ${user.token}`,
    // },
  })
    .then(response => {
      return response.json();
    })
    .catch(err => {
      console.log(err);
    });
};
// export const fetchUsers = () => API.get("/users");
// export const createUser = newUser => API.user("/users", newUser);
// // export const likeUser = id => API.patch(`/users/${id}/likeUser`);
// export const updateUser = (id, updatedUser) =>
//   API.patch(`/users/${id}`, updatedUser);
// export const deleteUser = id => API.delete(`/users/${id}`);

// export const signIn = formData => API.user("/user/signin", formData);
// export const signUp = formData => API.user("/user/signup", formData);
