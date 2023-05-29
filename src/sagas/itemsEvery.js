import {call, put, takeEvery} from 'redux-saga/effects';

import {itemsActions} from '../features/items/itemsSlice';
import {ApiHelper} from '../helpers';

const {requestEvery, success, failure} = itemsActions;

function callGetRequest(url, data, headers) {
  return ApiHelper.get(url, data, headers);
}

function* watchRequest(action) {
  const {payload} = action;
  try {
    let response;

    response = yield call(callGetRequest, payload.url, {});

    yield put(success(response));
  } catch (err) {
    yield put(failure(err.message));

    // ErrorHelper.handleErrors(err, true);
  }
}

export default function* root() {
  yield takeEvery(requestEvery, watchRequest);
}
