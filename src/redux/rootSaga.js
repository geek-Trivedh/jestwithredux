import {fork} from 'redux-saga/effects';
import catSaga from './Cats/catSaga';

export default function* () {
  yield fork(catSaga);
}
