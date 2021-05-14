import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE,
} from "./../utils/actionTypes";

// eslint-disable-next-line import/no-anonymous-default-export
export const reducer = (users = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
        console.log()
      return action.payload;
    // case LIKE:
    //   return users.map(po =>
    //     user._id === action.payload._id ? action.payload : user
    //   );
    case CREATE:
      return [...users, action.payload];
    case UPDATE:
      return users.map(user =>
        user._id === action.payload._id ? action.payload : user
      );
    case DELETE:
      return users.filter(user => user._id !== action.payload);
    default:
      return users;
  }
};
