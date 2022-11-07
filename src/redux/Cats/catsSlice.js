import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  cats: [],
  isLoading: false,
};
const catsSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    getCatsFetch: state => {
      console.log('Hello from reducer');
      state.isLoading = true;
    },
    getCatsSuccess: (state, action) => {
      (state.cats = action.payload), (state.isLoading = false);
    },
    getCatsFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {getCatsFailure, getCatsFetch, getCatsSuccess} = catsSlice.actions;

export default catsSlice.reducer;
