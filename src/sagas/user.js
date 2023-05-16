import {take, put, call, fork} from 'redux-saga/effects';

import {userActions} from '../features/user/userSlice';

const {request, success, failure} = userActions;

function callPostRequest(url, data, headers) {
  return fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(x => x.json());
}

function* watchRequest() {
  while (true) {
    const {payload} = yield take(request);

    try {
      let response = yield call(callPostRequest, payload.uri, payload.body);

      yield put(success(response));
    } catch (err) {
      yield put(failure(err.message));
    }
  }
}

export default function* root() {
  yield fork(watchRequest);
}
