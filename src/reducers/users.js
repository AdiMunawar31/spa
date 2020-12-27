import {
  GET_USER,
  GET_USER_DETAIL,
  POST_USER_CREATE,
  PUT_USER_EDIT,
} from "../actions";

let initialState = {
  getUsers: false,
  error: false,
  getUsersDetail: false,
  errorDetail: false,
  postUsersCreate: false,
  errorCreate: false,
  title: "Student List",
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        getUsers: action.payload.data,
        error: action.payload.errorMessage,
      };
    case GET_USER_DETAIL:
      return {
        ...state,
        getUsersDetail: action.payload.data,
        errorDetail: action.payload.errorMessage,
      };
    case POST_USER_CREATE:
      return {
        ...state,
        postUsersCreate: action.payload.data,
        errorCreate: action.payload.errorMessage,
      };
    case PUT_USER_EDIT:
      return {
        ...state,
        putUsersEdit: action.payload.data,
        errorEdit: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default users;
