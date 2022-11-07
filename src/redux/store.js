import {configureStore} from '@reduxjs/toolkit';
import counterSlice from './Counter/counterSlice';
import createSagaMiddleware from 'redux-saga';
import catsSlice from './Cats/catsSlice';
import rootSaga from './rootSaga';
const sagaMiddleware = createSagaMiddleware();
export const configureAppStore = preloadedState => {
  const newStore = configureStore({
    reducer: {
      counter: counterSlice,
      cats: catsSlice,
    },
    middleware: [sagaMiddleware],
    preloadedState,
  });
  sagaMiddleware.run(rootSaga);
  return newStore;
};
export const store = configureAppStore({});
