import {take, put, call, fork} from 'redux-saga/effects';

import {itemsActions} from '../features/items/itemsSlice';
// import ErrorHelper from '../helpers/ErrorHelper';

const {request, success, failure} = itemsActions;

function callGetRequest(url, data, headers) {
  return fetch(url, data).then(x => x.json());
}

function* watchRequest() {
  while (true) {
    const {payload} = yield take(request);

    try {
      let response;

      response = yield call(callGetRequest, payload.url, {});

      yield put(success(response));
    } catch (err) {
      yield put(failure(err.message));

      // ErrorHelper.handleErrors(err, true);
    }
  }
}

export default function* root() {
  yield fork(watchRequest);
}
