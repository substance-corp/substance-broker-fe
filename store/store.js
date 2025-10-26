import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import { watcherSaga } from './sagas/rootSaga';

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Run saga middleware
sagaMiddleware.run(watcherSaga);

export default store;

