import { all, takeLatest } from 'redux-saga/effects';

// Auth
import {
  handleUserLogin,
  handleLogoutUser,
  handleUserLoginDetails,
} from '../handlers/authHandler';
import {
  USER_LOGIN,
  LOGOUT_USER,
  USER_LOGIN_DETAILS,
} from '../actions/authActions';

// Users
import {
  handleGetUsers,
  handleGetUser,
  handleCreateUser,
  handleUpdateUser,
  handleDeleteUser,
  handleUpdateUserStatus,
} from '../handlers/userHandler';
import {
  GET_USERS,
  GET_USER,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
  UPDATE_USER_STATUS,
} from '../actions/userActions';

// Roles
import {
  handleGetRoles,
  handleGetRole,
  handleCreateRole,
  handleUpdateRole,
  handleDeleteRole,
} from '../handlers/roleHandler';
import {
  GET_ROLES,
  GET_ROLE,
  CREATE_ROLE,
  UPDATE_ROLE,
  DELETE_ROLE,
} from '../actions/roleActions';

export function* watcherSaga() {
  yield all([
    // Auth
    takeLatest(USER_LOGIN, handleUserLogin),
    takeLatest(LOGOUT_USER, handleLogoutUser),
    takeLatest(USER_LOGIN_DETAILS, handleUserLoginDetails),

    // Users
    takeLatest(GET_USERS, handleGetUsers),
    takeLatest(GET_USER, handleGetUser),
    takeLatest(CREATE_USER, handleCreateUser),
    takeLatest(UPDATE_USER, handleUpdateUser),
    takeLatest(DELETE_USER, handleDeleteUser),
    takeLatest(UPDATE_USER_STATUS, handleUpdateUserStatus),

    // Roles
    takeLatest(GET_ROLES, handleGetRoles),
    takeLatest(GET_ROLE, handleGetRole),
    takeLatest(CREATE_ROLE, handleCreateRole),
    takeLatest(UPDATE_ROLE, handleUpdateRole),
    takeLatest(DELETE_ROLE, handleDeleteRole),
  ]);
}

