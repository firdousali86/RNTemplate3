import {fork} from 'redux-saga/effects';
import todos from './todos';
import items from './items';
import user from './user';
import itemsEvery from './itemsEvery';
import itemsLatest from './itemsLatest';

export default function* rootSaga() {
  yield fork(todos);
  yield fork(items);
  yield fork(user);
  yield fork(itemsEvery);
  yield fork(itemsLatest);
}
