// import {configureStore} from '@reduxjs/toolkit';
// import asyncStorage from '@react-native-async-storage/async-storage';

import {configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducer';
import {persistReducer, persistStore} from 'redux-persist';
import rootReducer from '../reducer';
const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [''],
};

const persistReducers = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

const persistore = persistStore(store);
export {store, persistore};
