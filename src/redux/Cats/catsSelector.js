import {createSelector} from '@reduxjs/toolkit';

const catsSelector = state => state.cats;

export const selectCats = createSelector(
  catsSelector,
  subState => subState.cats,
);
