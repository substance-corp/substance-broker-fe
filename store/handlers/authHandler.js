import { put, call, takeLatest } from 'redux-saga/effects';
import { apiPost, apiGet } from '../../services/api';
import {
  USER_LOGIN,
  LOGOUT_USER,
  USER_LOGIN_DETAILS,
} from '../actions/authActions';
import { SHOW_LOADER, HIDE_LOADER } from '../actions/uiActions';

// API Functions
export function* loginApi(credentials) {
  return yield call(apiPost, '/auth/login', credentials);
}

export function* logoutApi() {
  return yield call(apiPost, '/auth/logout');
}

export function* getUserDetailsApi() {
  return yield call(apiGet, '/auth/me');
}

// Handler Functions
export function* handleUserLogin(action) {
  try {
    yield put({ type: SHOW_LOADER, payload: 'Logging in...' });

    const response = yield call(loginApi, action?.payload ?? {});

    if (response && response.token) {
      // Store token in localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', response.token);
      }

      yield put({ type: 'USER_LOGIN_SUCCESS', payload: response });
    }

    yield put({ type: HIDE_LOADER });
  } catch (err) {
    console.log(err);
    yield put({ type: 'USER_LOGIN_FAILURE', payload: err.message || 'Login failed' });
    yield put({ type: HIDE_LOADER });
  }
}

export function* handleLogoutUser(action) {
  try {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token');
    }

    yield call(logoutApi);
    yield put({ type: 'LOGOUT_USER_SUCCESS' });
  } catch (err) {
    console.log(err);
  }
}

export function* handleUserLoginDetails(action) {
  try {
    yield put({ type: SHOW_LOADER, payload: 'Loading user data...' });

    const response = yield call(getUserDetailsApi);

    if (response) {
      yield put({ type: 'USER_LOGIN_DETAILS_SUCCESS', payload: response });
    }

    yield put({ type: HIDE_LOADER });
  } catch (err) {
    console.log(err);
    yield put({ type: 'USER_LOGIN_DETAILS_FAILURE', payload: err.message || 'Failed to load user' });
    yield put({ type: HIDE_LOADER });
  }
}

