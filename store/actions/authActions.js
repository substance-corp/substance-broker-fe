// Auth Action Types
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';

export const LOGOUT_USER = 'LOGOUT_USER';
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS';

export const USER_LOGIN_DETAILS = 'USER_LOGIN_DETAILS';
export const USER_LOGIN_DETAILS_SUCCESS = 'USER_LOGIN_DETAILS_SUCCESS';
export const USER_LOGIN_DETAILS_FAILURE = 'USER_LOGIN_DETAILS_FAILURE';

// Auth Actions
export const userLogin = (credentials) => ({
  type: USER_LOGIN,
  payload: credentials,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const getUserLoginDetails = () => ({
  type: USER_LOGIN_DETAILS,
});

