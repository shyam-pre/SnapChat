import {all} from 'redux-saga/effects';
import {watchFetchUser} from './homeSaga';

export default function* rootSaga() {
  yield all([watchFetchUser()]);
}
