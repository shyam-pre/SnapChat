import {createSlice} from '@reduxjs/toolkit';

const defaultDataSlice = createSlice({
  name: 'defaultData',
  initialState: {
    defaultData: [],
  },

  reducers: {
    setData: (state, action) => {
      state.defaultData = action.payload;
    },

    cleanData: state => {
      state.defaultData = [];
    },
  },
});

export const {setData, cleanData} = defaultDataSlice.actions;
export default defaultDataSlice.reducer;
