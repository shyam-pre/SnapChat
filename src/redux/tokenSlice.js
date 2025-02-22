import {createSlice} from '@reduxjs/toolkit';

const tokenSlice = createSlice({
  name: 'token',
  initialState: {
    token: null,
  },

  reducers: {
    storeToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: state => {
      state.token = null;
    },
  },
});

export default tokenSlice.reducer;
export const {storeToken, clearToken} = tokenSlice.actions;
