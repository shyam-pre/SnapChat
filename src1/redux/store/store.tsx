// import {configureStore} from '@reduxjs/toolkit';
// import {AllApi} from '../../../src/redux/AllApi/AllApi';
// import {getDefaultConfig} from '@react-native/metro-config';

// export const store = configureStore({
//   // reducer:
//   reducer: {
//     // Add the generated reducer as a specific top-level slice
//     [AllApi.reducerPath]: AllApi.reducer,
//   },

//   //  middleware: (getDefaultMiddleware) =>
//   // getDefaultMiddleware().concat(pokemonApi.middleware),
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware().concat(AllApi.middleware),
// });

import {configureStore} from '@reduxjs/toolkit';
import {AllApiSlice} from '../ApiSlice/AllApiSlice';

export const store = configureStore({
  reducer: {
    [AllApiSlice.reducerPath]: AllApiSlice.reducer, // Add API reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(AllApiSlice.middleware), // Add API middleware
});
