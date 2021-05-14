import { isAuthenticated } from "../api";
import { addPostForm, createUserForm, loginForm } from "../assets/FormJson";

export const getLoginInitials = () => {
  let intitials = {};
  loginForm.forEach(login => {
    intitials[login.name] = "";
  });
  return intitials;
};

export const getUserInitials = () => {
  let intitials = {};
  createUserForm.forEach(user => {
    intitials[user.name] = "";
  });
  return intitials;
};

export const getPostInitials = () => {
  const { user } = isAuthenticated();
  let intitials = {};
  addPostForm.forEach(post => {
    intitials[post.name] = "";
  });
  intitials.author = user._id;
  return intitials;
};
