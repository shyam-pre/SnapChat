// // slices/dataSlice.js
// import {createSlice} from '@reduxjs/toolkit';

// const dataSlice = createSlice({
//   name: 'data',
//   initialState: [],
//   reducers: {
//     setData: (state, action) => {
//       return action.payload; // Set the state to the new data
//     },
//     addData: (state, action) => {
//       state.push(action.payload); // Add new data to the existing state
//     },
//     removeData: (state, action) => {
//       return state.filter(item => item.id !== action.payload.id); // Remove data by id
//     },
//   },
// });

// // Export actions and reducer
// export const {setData, addData, removeData} = dataSlice.actions;
// export default dataSlice.reducer;

// dataSlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [
    {id: 1, name: 'abc'},
    {id: 2, name: 'xyz'},
  ],
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateItem: (state, action) => {
      const index = state.items.findIndex(
        item => item.id === action.payload.id,
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
});

// Export actions
export const {addItem, removeItem, updateItem} = dataSlice.actions;

// Export the reducer
export default dataSlice.reducer;
