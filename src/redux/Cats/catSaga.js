import {takeLatest, put} from 'redux-saga/effects';
import {getCats} from '../../API';
import {getCatsFetch, getCatsSuccess} from './catsSlice';

function* workGetCatsFetch() {
  console.log('Hello from saga');
  const cats = yield getCats();
  const shortendCats = cats.data.slice(0, 10);
  console.log('cats', cats.data);
  yield put(getCatsSuccess(shortendCats));
}

export default function* catSaga() {
  yield takeLatest(getCatsFetch.type, workGetCatsFetch);
}
