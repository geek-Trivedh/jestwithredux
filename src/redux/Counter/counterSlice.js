import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrementCounter: state => {
      state.count += 1;
    },
    decrementCounter: state => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const {incrementCounter, decrementCounter, incrementByAmount} =
  counterSlice.actions;

export default counterSlice.reducer;
