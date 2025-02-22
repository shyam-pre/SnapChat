// // import {configureStore} from '@reduxjs/toolkit';
// // import asyncStorage from '@react-native-async-storage/async-storage';

// import {configureStore} from '@reduxjs/toolkit';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import createSagaMiddleware from 'redux-saga';
// import reducer from '../reducer';
// import {persistReducer, persistStore} from 'redux-persist';
// import rootReducer from '../reducer';
// const sagaMiddleware = createSagaMiddleware();

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: [''],
// };

// const persistReducers = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//   reducer: persistReducers,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//       immutableCheck: false,
//     }).concat(sagaMiddleware), // Add sagaMiddleware here
// });

// // Attach sagaMiddleware if you're using Redux Saga
// // sagaMiddleware.run(rootSaga); // Uncomment if rootSaga exists

// const persistore = persistStore(store);
// export {store, persistore};

// Import necessary libraries and modules
// import {configureStore} from '@reduxjs/toolkit';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import createSagaMiddleware from 'redux-saga';
// import {persistReducer, persistStore} from 'redux-persist';
// import rootReducer from '../reducer'; // Main reducer for the app

// // Initialize Redux-Saga middleware
// const sagaMiddleware = createSagaMiddleware();
// // initializes Redux-Saga for managing side effects like API calls.

// // Configuration for Redux-Persist
// const persistConfig = {
//   key: 'root', // Save state under the key 'root' in AsyncStorage
//   storage: AsyncStorage, // Use AsyncStorage for storage
//   whitelist: [], // Add keys for state slices you want to persist
//   // whitelist: All slices of the state will be persisted unless an exclude rule (blacklist) is applied.
// };

// // Wrap the rootReducer with persistReducer
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // Configure the Redux store
// const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: false, // Disable warnings for non-serializable values
//       immutableCheck: false, // Disable warnings for immutability checks
//     }).concat(sagaMiddleware), // Attach Redux-Saga middleware
// });

// // Create the Persistor to sync store with local storage
// const persistor = persistStore(store);

// // Uncomment if you have a rootSaga to run
// // sagaMiddleware.run(rootSaga);

// // Export store and persistor for use in the app
// export {store, persistor};

import {configureStore} from '@reduxjs/toolkit';
import {apiCall} from '../ApiCall';
import {setupListeners} from '@reduxjs/toolkit/query';
import routeReducer from '../reducer/authReducer';
import dataReducer from '../dataSlice';
import tokenReducer from '../tokenSlice';
import defaultDataReducer from '../defaultDataSlice';
import cartReducer from '../cartSlice';
export const store = configureStore({
  reducer: {
    route: routeReducer,
    [apiCall.reducerPath]: apiCall.reducer,
    data: dataReducer,
    // token: dataReducer,
    token: tokenReducer,
    defaultData: defaultDataReducer,
    cartItems: cartReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiCall.middleware),
});

setupListeners(store.dispatch);
