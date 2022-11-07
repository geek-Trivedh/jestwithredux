import {createSelector} from '@reduxjs/toolkit';

const counterSelector = state => state.counter;

export const selectCount = createSelector(
  counterSelector,
  subState => subState.count,
);
