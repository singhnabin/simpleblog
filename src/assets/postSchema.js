import * as yup from "yup";
export const postSchema = yup.object({
  title: yup.string().required("Title is required"),
  content: yup.string(),
  postType: yup.string().required("Type is required"),
  author: yup.string().required("author is required"),
});
