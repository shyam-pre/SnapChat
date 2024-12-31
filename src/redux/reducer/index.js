// import {combineReducers} from 'redux';
// import authReducer from './authReducer';
// import actionType from '../action/actionType';

// const appReducer = combineReducers({
//   authReducer,
// });

// const rootReducer = (state, action) => {
//   if (action.type == actionType.CLEARE_REDUX_STATE) {
//     state = undefined;
//   }
//   return appReducer(state, action);
// };

// export default rootReducer;

import {combineReducers} from '@reduxjs/toolkit';
import routeReducer from './authReducer';
import counterReducer from './counterReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
  route: routeReducer,
  products: productReducer, // Add product reducer here
  counter: counterReducer,
});

export default rootReducer;
