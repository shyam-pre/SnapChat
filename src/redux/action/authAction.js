// import actionType from './actionType';

// const initial_state = {
//   IsLogin: false,
// };

// export default function (state = initial_state, action) {
//   switch (action.type) {
//     case action.Is_Login:
//       const data = action.payload;
//       return {IsLogin: data};
//     default:
//       return {...state};
//   }
// }

import {SET_MAIN_ROUTE} from './actionType';
export const setMainRoute = routes => ({
  type: SET_MAIN_ROUTE,
  payload: routes,
});
