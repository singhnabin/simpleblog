export const loginForm = [
  { type: "email", label: "Email", name: "email" },
  { type: "password", label: "Password", name: "password" },
  ,
];
export const createUserForm = [
  { type: "text", label: "First Name", name: "firstName" },
  { type: "text", label: "Last Name", name: "lastName" },
  { type: "email", label: "Email", name: "email" },
  { type: "password", label: "Password", name: "password" },
  { type: "password", label: "Confirm Password", name: "confirmPassword" },
  ,
];

export const updateUserForm = [
  { type: "text", label: "First Name", name: "firstName" },
  { type: "text", label: "Last Name", name: "lastName" },
  { type: "email", label: "Email", name: "email" },
  {
    type: "select",
    label: "Role",
    name: "role",
    option: [
      { label: "Admin", value: 1 },
      { label: "User", value: 0 },
    ],
  },

  ,
];

export const addPostForm = [
  { type: "text", label: "Title", name: "title" },
  {
    type: "select",
    label: "Post Type",
    name: "postType",
    options: [
      { label: "Public", value: "public" },
      { label: "Private", value: "private" },
      { label: "Upcoming", value: "upcoming" },
    ],
  },
  { type: "editor", label: "Content", name: "content" },
  
];
