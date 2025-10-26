// Role Action Types
export const GET_ROLES = 'GET_ROLES';
export const SET_ROLES = 'SET_ROLES';
export const GET_ROLES_FAILURE = 'GET_ROLES_FAILURE';

export const GET_ROLE = 'GET_ROLE';
export const SET_ROLE = 'SET_ROLE';
export const GET_ROLE_FAILURE = 'GET_ROLE_FAILURE';

export const CREATE_ROLE = 'CREATE_ROLE';
export const CREATE_ROLE_SUCCESS = 'CREATE_ROLE_SUCCESS';
export const CREATE_ROLE_FAILURE = 'CREATE_ROLE_FAILURE';

export const UPDATE_ROLE = 'UPDATE_ROLE';
export const UPDATE_ROLE_SUCCESS = 'UPDATE_ROLE_SUCCESS';
export const UPDATE_ROLE_FAILURE = 'UPDATE_ROLE_FAILURE';

export const DELETE_ROLE = 'DELETE_ROLE';
export const DELETE_ROLE_SUCCESS = 'DELETE_ROLE_SUCCESS';
export const DELETE_ROLE_FAILURE = 'DELETE_ROLE_FAILURE';

// Role Actions
export const getRoles = (params = {}) => ({
  type: GET_ROLES,
  payload: params,
});

export const getRole = (id) => ({
  type: GET_ROLE,
  payload: id,
});

export const createRole = (roleData) => ({
  type: CREATE_ROLE,
  payload: roleData,
});

export const updateRole = (id, roleData) => ({
  type: UPDATE_ROLE,
  payload: { id, roleData },
});

export const deleteRole = (id) => ({
  type: DELETE_ROLE,
  payload: id,
});

