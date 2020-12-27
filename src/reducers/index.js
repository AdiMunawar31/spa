import users from "./users";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

export default combineReducers({
  users,
  form: formReducer,
});
