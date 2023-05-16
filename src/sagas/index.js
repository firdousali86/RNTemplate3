import {fork} from 'redux-saga/effects';
import todos from './todos';
import items from './items';

export default function* rootSaga() {
  yield fork(todos);
  yield fork(items);
}
