import { put, call, takeLatest } from 'redux-saga/effects';
import {
  apiGet,
  apiPost,
  apiPut,
  apiPatch,
  apiDelete,
} from '../../services/api';
import {
  GET_USERS,
  GET_USER,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
  UPDATE_USER_STATUS,
} from '../actions/userActions';
import { SHOW_LOADER, HIDE_LOADER, SHOW_SUCCESS_TOAST, SHOW_ERROR_TOAST } from '../actions/uiActions';

// API Functions
export function* getUsersApi(params) {
  return yield call(apiGet, '/users', params);
}

export function* getUserApi(id) {
  return yield call(apiGet, `/users/${id}`);
}

export function* createUserApi(userData) {
  return yield call(apiPost, '/users', userData);
}

export function* updateUserApi(id, userData) {
  return yield call(apiPut, `/users/${id}`, userData);
}

export function* deleteUserApi(id) {
  return yield call(apiDelete, `/users/${id}`);
}

export function* updateUserStatusApi(id, status) {
  return yield call(apiPatch, `/users/${id}/status`, { status });
}

// Handler Functions
export function* handleGetUsers(action) {
  try {
    yield put({ type: SHOW_LOADER, payload: 'Loading users...' });

    const response = yield call(getUsersApi, action?.payload ?? {});

    if (response) {
      yield put({ type: 'SET_USERS', payload: response });
    }

    yield put({ type: HIDE_LOADER });
  } catch (err) {
    console.log(err);
    yield put({ type: 'GET_USERS_FAILURE', payload: err.message || 'Failed to fetch users' });
    yield put({ type: SHOW_ERROR_TOAST, payload: err.message || 'Failed to fetch users' });
    yield put({ type: HIDE_LOADER });
  }
}

export function* handleGetUser(action) {
  try {
    yield put({ type: SHOW_LOADER, payload: 'Loading user...' });

    const response = yield call(getUserApi, action?.payload ?? "");

    if (response) {
      yield put({ type: 'SET_USER', payload: response });
    }

    yield put({ type: HIDE_LOADER });
  } catch (err) {
    console.log(err);
    yield put({ type: 'GET_USER_FAILURE', payload: err.message || 'Failed to fetch user' });
    yield put({ type: HIDE_LOADER });
  }
}

export function* handleCreateUser(action) {
  try {
    yield put({ type: SHOW_LOADER, payload: 'Creating user...' });

    const response = yield call(createUserApi, action?.payload ?? {});

    if (response) {
      yield put({ type: 'CREATE_USER_SUCCESS', payload: response });
      yield put({ type: SHOW_SUCCESS_TOAST, payload: 'User created successfully' });
    }

    yield put({ type: HIDE_LOADER });
  } catch (err) {
    console.log(err);
    yield put({ type: 'CREATE_USER_FAILURE', payload: err.message || 'Failed to create user' });
    yield put({ type: SHOW_ERROR_TOAST, payload: err.message || 'Failed to create user' });
    yield put({ type: HIDE_LOADER });
  }
}

export function* handleUpdateUser(action) {
  try {
    yield put({ type: SHOW_LOADER, payload: 'Updating user...' });

    const { id, userData } = action?.payload ?? {};

    const response = yield call(updateUserApi, id, userData);

    if (response) {
      yield put({ type: 'UPDATE_USER_SUCCESS', payload: response });
      yield put({ type: SHOW_SUCCESS_TOAST, payload: 'User updated successfully' });
    }

    yield put({ type: HIDE_LOADER });
  } catch (err) {
    console.log(err);
    yield put({ type: 'UPDATE_USER_FAILURE', payload: err.message || 'Failed to update user' });
    yield put({ type: SHOW_ERROR_TOAST, payload: err.message || 'Failed to update user' });
    yield put({ type: HIDE_LOADER });
  }
}

export function* handleDeleteUser(action) {
  try {
    yield put({ type: SHOW_LOADER, payload: 'Deleting user...' });

    yield call(deleteUserApi, action?.payload ?? "");

    yield put({ type: 'DELETE_USER_SUCCESS', payload: action?.payload });
    yield put({ type: SHOW_SUCCESS_TOAST, payload: 'User deleted successfully' });
    yield put({ type: HIDE_LOADER });
  } catch (err) {
    console.log(err);
    yield put({ type: 'DELETE_USER_FAILURE', payload: err.message || 'Failed to delete user' });
    yield put({ type: SHOW_ERROR_TOAST, payload: err.message || 'Failed to delete user' });
    yield put({ type: HIDE_LOADER });
  }
}

export function* handleUpdateUserStatus(action) {
  try {
    yield put({ type: SHOW_LOADER, payload: 'Updating user status...' });

    const { id, status } = action?.payload ?? {};

    const response = yield call(updateUserStatusApi, id, status);

    if (response) {
      yield put({ type: 'UPDATE_USER_STATUS_SUCCESS', payload: response });
      yield put({ type: SHOW_SUCCESS_TOAST, payload: 'User status updated successfully' });
    }

    yield put({ type: HIDE_LOADER });
  } catch (err) {
    console.log(err);
    yield put({ type: 'UPDATE_USER_STATUS_FAILURE', payload: err.message || 'Failed to update user status' });
    yield put({ type: SHOW_ERROR_TOAST, payload: err.message || 'Failed to update user status' });
    yield put({ type: HIDE_LOADER });
  }
}

