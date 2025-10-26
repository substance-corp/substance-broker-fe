import {
  SET_USERS,
  GET_USERS_FAILURE,
  SET_USER,
  GET_USER_FAILURE,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  UPDATE_USER_STATUS_SUCCESS,
  UPDATE_USER_STATUS_FAILURE,
} from '../actions/userActions';

const initialState = {
  users: [],
  currentUser: null,
  loading: false,
  error: null,
  totalCount: 0,
  pagination: {
    page: 1,
    limit: 10,
    totalPages: 1,
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.payload.users || action.payload,
        totalCount: action.payload.totalCount || action.payload.length,
        pagination: action.payload.pagination || state.pagination,
        loading: false,
        error: null,
      };

    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
        error: null,
      };

    case CREATE_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
        loading: false,
        error: null,
      };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
        currentUser: state.currentUser?.id === action.payload.id ? action.payload : state.currentUser,
        loading: false,
        error: null,
      };

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
        loading: false,
        error: null,
      };

    case UPDATE_USER_STATUS_SUCCESS:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? action.payload : user
        ),
        loading: false,
        error: null,
      };

    case GET_USERS_FAILURE:
    case GET_USER_FAILURE:
    case CREATE_USER_FAILURE:
    case UPDATE_USER_FAILURE:
    case DELETE_USER_FAILURE:
    case UPDATE_USER_STATUS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;

