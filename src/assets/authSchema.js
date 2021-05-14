import * as yup from "yup";
export const signUpSchema = yup.object({
  firstName: yup
    .string()
    .required("Firstname is requierd")
    .min(3, "Firstname should be atleast 3 character"),
  lastName: yup
    .string()
    .required("Lastname is required")
    .min(3, "Lastname should be atleast 3 character"),
  email: yup
    .string()
    .email("Should be a proper email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
  // .matches(
  //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
  // ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Should be a proper email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});
export const updateSchema = yup.object({
  firstName: yup
    .string()
    .required("Firstname is requierd")
    .min(3, "Firstname should be atleast 3 character"),
  lastName: yup
    .string()
    .required("Lastname is required")
    .min(3, "Lastname should be atleast 3 character"),
  email: yup
    .string()
    .email("Should be a proper email")
    .required("Email is required"),
  role: yup.number().required("Either admin or User"),
});
