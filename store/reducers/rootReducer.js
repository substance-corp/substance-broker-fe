import { combineReducers } from 'redux';
import uiReducer from './uiReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';
import roleReducer from './roleReducer';

const rootReducer = combineReducers({
  ui: uiReducer,
  auth: authReducer,
  user: userReducer,
  role: roleReducer,
});

export default rootReducer;

