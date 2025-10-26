// User Action Types
export const GET_USERS = 'GET_USERS';
export const SET_USERS = 'SET_USERS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

export const GET_USER = 'GET_USER';
export const SET_USER = 'SET_USER';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';

export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

export const DELETE_USER = 'DELETE_USER';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';

export const UPDATE_USER_STATUS = 'UPDATE_USER_STATUS';
export const UPDATE_USER_STATUS_SUCCESS = 'UPDATE_USER_STATUS_SUCCESS';
export const UPDATE_USER_STATUS_FAILURE = 'UPDATE_USER_STATUS_FAILURE';

// User Actions
export const getUsers = (params = {}) => ({
  type: GET_USERS,
  payload: params,
});

export const getUser = (id) => ({
  type: GET_USER,
  payload: id,
});

export const createUser = (userData) => ({
  type: CREATE_USER,
  payload: userData,
});

export const updateUser = (id, userData) => ({
  type: UPDATE_USER,
  payload: { id, userData },
});

export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: id,
});

export const updateUserStatus = (id, status) => ({
  type: UPDATE_USER_STATUS,
  payload: { id, status },
});

