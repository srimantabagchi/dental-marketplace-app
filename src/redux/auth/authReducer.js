import {
  REGISTER_USER_REQUEST,
  LOGIN_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,
} from "./authTypes";

const initialState = {
  loading: false,
  isAuthenticated: false,
  loggedInUser: "",
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      console.log(REGISTER_USER_REQUEST);
      return {
        ...state,
        isAuthenticated: false,
        loading: true,
      };
    case LOGIN_USER_REQUEST:
      console.log(LOGIN_USER_REQUEST);
      return {
        ...state,
        isAuthenticated: false,
        loading: true,
      };
    case LOAD_USER_SUCCESS:
      console.log(LOAD_USER_SUCCESS);
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        loggedInUser: action.payload,
        error: "",
      };
    case LOAD_USER_FAILURE:
      console.log(LOAD_USER_FAILURE);
      return {
        loading: false,
        isAuthenticated: false,
        loggedInUser: "",
        error: action.payload,
      };
    default:
      console.log("default");
      return state;
  }
};

export default reducer;
