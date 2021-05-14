import { isAuthenticated } from ".";

const API = `http://localhost:4000/api`;
const { token } = isAuthenticated();
export const getAllPosts = userId => {
  
  return fetch(`${API}/posts/user/${userId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then(res => {
      return res.json();
    })
    .catch(err => {
      console.log(err);
    });
};

export const savePost = data => {
  return fetch(`${API}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then(res => {
      return res.json();
    })
    .catch(err => {
      console.log(err);
    });
};
