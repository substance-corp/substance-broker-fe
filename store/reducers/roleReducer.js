import {
  SET_ROLES,
  GET_ROLES_FAILURE,
  SET_ROLE,
  GET_ROLE_FAILURE,
  CREATE_ROLE_SUCCESS,
  CREATE_ROLE_FAILURE,
  UPDATE_ROLE_SUCCESS,
  UPDATE_ROLE_FAILURE,
  DELETE_ROLE_SUCCESS,
  DELETE_ROLE_FAILURE,
} from '../actions/roleActions';

const initialState = {
  roles: [],
  currentRole: null,
  loading: false,
  error: null,
  totalCount: 0,
  pagination: {
    page: 1,
    limit: 10,
    totalPages: 1,
  },
};

const roleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROLES:
      return {
        ...state,
        roles: action.payload.roles || action.payload,
        totalCount: action.payload.totalCount || action.payload.length,
        pagination: action.payload.pagination || state.pagination,
        loading: false,
        error: null,
      };

    case SET_ROLE:
      return {
        ...state,
        currentRole: action.payload,
        loading: false,
        error: null,
      };

    case CREATE_ROLE_SUCCESS:
      return {
        ...state,
        roles: [...state.roles, action.payload],
        loading: false,
        error: null,
      };

    case UPDATE_ROLE_SUCCESS:
      return {
        ...state,
        roles: state.roles.map((role) =>
          role.id === action.payload.id ? action.payload : role
        ),
        currentRole: state.currentRole?.id === action.payload.id ? action.payload : state.currentRole,
        loading: false,
        error: null,
      };

    case DELETE_ROLE_SUCCESS:
      return {
        ...state,
        roles: state.roles.filter((role) => role.id !== action.payload),
        loading: false,
        error: null,
      };

    case GET_ROLES_FAILURE:
    case GET_ROLE_FAILURE:
    case CREATE_ROLE_FAILURE:
    case UPDATE_ROLE_FAILURE:
    case DELETE_ROLE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default roleReducer;

