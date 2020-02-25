import {applyMiddleware, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import rootReducer from './reducers';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from '../store/saga';
import AsyncStorage from '@react-native-community/async-storage';

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware, createLogger()),
);

// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);

let persistor = persistStore(store);

export {store, persistor};
