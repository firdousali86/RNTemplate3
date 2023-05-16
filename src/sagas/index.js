import {fork} from 'redux-saga/effects';
import todos from './todos';
import items from './items';
import user from './user';

export default function* rootSaga() {
  yield fork(todos);
  yield fork(items);
  yield fork(user);
}
