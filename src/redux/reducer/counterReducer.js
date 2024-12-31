// const initialState = {
//   count: 0,
// };

import {DECREMENT_COUNT, INCREMENT_COUNT} from '../action/actionType';

// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {...state, count: state.count + 1};
//     case 'DECREMENT':
//       return {...state, count: state.count - 1};
//     default:
//       return state;
//   }
// };

// export default counterReducer;

const initial_state = {
  count: 0,
};

const counterReducer = (state = initial_state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {...state, count: state.count + 1};
    case DECREMENT_COUNT:
      return {...state, count: state.count - 1};
    default:
      return state;
  }
};

export default counterReducer;
