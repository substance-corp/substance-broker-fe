import { put, call, takeLatest } from 'redux-saga/effects';
import {
  apiGet,
  apiPost,
  apiPut,
  apiDelete,
} from '../../services/api';
import {
  GET_ROLES,
  GET_ROLE,
  CREATE_ROLE,
  UPDATE_ROLE,
  DELETE_ROLE,
} from '../actions/roleActions';
import { SHOW_LOADER, HIDE_LOADER, SHOW_SUCCESS_TOAST, SHOW_ERROR_TOAST } from '../actions/uiActions';

// API Functions
export function* getRolesApi(params) {
  return yield call(apiGet, '/roles', params);
}

export function* getRoleApi(id) {
  return yield call(apiGet, `/roles/${id}`);
}

export function* createRoleApi(roleData) {
  return yield call(apiPost, '/roles', roleData);
}

export function* updateRoleApi(id, roleData) {
  return yield call(apiPut, `/roles/${id}`, roleData);
}

export function* deleteRoleApi(id) {
  return yield call(apiDelete, `/roles/${id}`);
}

// Handler Functions
export function* handleGetRoles(action) {
  try {
    yield put({ type: SHOW_LOADER, payload: 'Loading roles...' });

    const response = yield call(getRolesApi, action?.payload ?? {});

    if (response) {
      yield put({ type: 'SET_ROLES', payload: response });
    }

    yield put({ type: HIDE_LOADER });
  } catch (err) {
    console.log(err);
    yield put({ type: 'GET_ROLES_FAILURE', payload: err.message || 'Failed to fetch roles' });
    yield put({ type: SHOW_ERROR_TOAST, payload: err.message || 'Failed to fetch roles' });
    yield put({ type: HIDE_LOADER });
  }
}

export function* handleGetRole(action) {
  try {
    yield put({ type: SHOW_LOADER, payload: 'Loading role...' });

    const response = yield call(getRoleApi, action?.payload ?? "");

    if (response) {
      yield put({ type: 'SET_ROLE', payload: response });
    }

    yield put({ type: HIDE_LOADER });
  } catch (err) {
    console.log(err);
    yield put({ type: 'GET_ROLE_FAILURE', payload: err.message || 'Failed to fetch role' });
    yield put({ type: HIDE_LOADER });
  }
}

export function* handleCreateRole(action) {
  try {
    yield put({ type: SHOW_LOADER, payload: 'Creating role...' });

    const response = yield call(createRoleApi, action?.payload ?? {});

    if (response) {
      yield put({ type: 'CREATE_ROLE_SUCCESS', payload: response });
      yield put({ type: SHOW_SUCCESS_TOAST, payload: 'Role created successfully' });
    }

    yield put({ type: HIDE_LOADER });
  } catch (err) {
    console.log(err);
    yield put({ type: 'CREATE_ROLE_FAILURE', payload: err.message || 'Failed to create role' });
    yield put({ type: SHOW_ERROR_TOAST, payload: err.message || 'Failed to create role' });
    yield put({ type: HIDE_LOADER });
  }
}

export function* handleUpdateRole(action) {
  try {
    yield put({ type: SHOW_LOADER, payload: 'Updating role...' });

    const { id, roleData } = action?.payload ?? {};

    const response = yield call(updateRoleApi, id, roleData);

    if (response) {
      yield put({ type: 'UPDATE_ROLE_SUCCESS', payload: response });
      yield put({ type: SHOW_SUCCESS_TOAST, payload: 'Role updated successfully' });
    }

    yield put({ type: HIDE_LOADER });
  } catch (err) {
    console.log(err);
    yield put({ type: 'UPDATE_ROLE_FAILURE', payload: err.message || 'Failed to update role' });
    yield put({ type: SHOW_ERROR_TOAST, payload: err.message || 'Failed to update role' });
    yield put({ type: HIDE_LOADER });
  }
}

export function* handleDeleteRole(action) {
  try {
    yield put({ type: SHOW_LOADER, payload: 'Deleting role...' });

    yield call(deleteRoleApi, action?.payload ?? "");

    yield put({ type: 'DELETE_ROLE_SUCCESS', payload: action?.payload });
    yield put({ type: SHOW_SUCCESS_TOAST, payload: 'Role deleted successfully' });
    yield put({ type: HIDE_LOADER });
  } catch (err) {
    console.log(err);
    yield put({ type: 'DELETE_ROLE_FAILURE', payload: err.message || 'Failed to delete role' });
    yield put({ type: SHOW_ERROR_TOAST, payload: err.message || 'Failed to delete role' });
    yield put({ type: HIDE_LOADER });
  }
}

