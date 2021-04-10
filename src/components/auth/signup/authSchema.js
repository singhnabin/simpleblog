import * as yup from "yup";
export const signUpSchema = yup.object({
  firstname: yup
    .string()
    .required("Firstname is requierd")
    .min(8, "Firstname should be atleast 8 character"),
  lastname: yup
    .string()
    .required("Lastname is required")
    .min(3, "Lastname should be atleast 3 character"),
  email: yup
    .string()
    .email("Should be a proper email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Should be a proper email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});
