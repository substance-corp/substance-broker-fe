import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  LOGOUT_USER_SUCCESS,
  USER_LOGIN_DETAILS_SUCCESS,
  USER_LOGIN_DETAILS_FAILURE,
} from '../actions/authActions';

const initialState = {
  user: null,
  isAuthenticated: false,
  token: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        loading: false,
        error: null,
      };

    case USER_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthenticated: false,
        user: null,
        token: null,
      };

    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        loading: false,
        error: null,
      };

    case USER_LOGIN_DETAILS_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
        error: null,
      };

    case USER_LOGIN_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

export default authReducer;

