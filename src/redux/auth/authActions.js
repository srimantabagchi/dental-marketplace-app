import { auth } from "../../config/fbConfig";
import {
  REGISTER_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
} from "./authTypes";

export const registerUser = (email, password) => {
  return (dispatch) => {
    dispatch({
      type: REGISTER_USER_REQUEST,
    });
    console.log("email" + email);
    console.log("password" + password);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        console.log("User created successfully");
        console.log(response);
        dispatch({
          type: LOAD_USER_SUCCESS,
          payload: response,
        });
      })
      .catch((error) =>
        dispatch({ type: LOAD_USER_FAILURE, payload: error.message })
      );
  };
};
