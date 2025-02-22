import {call, put, takeLatest} from 'redux-saga/effects';
import {
  fetchUserDataFailure,
  // fetchUserDataRequest,
  fetchUserDataSuccess,
} from '../action/userAction';
import {FETCH_USER_DATA_REQUEST} from '../action/ActionTypes';
import {apifuntion} from '../../Provider/Api/ApiInfo';
import {showSnack} from '../../Provider/Messageconsolevalidationprovider/Snackbar';

function* fetchUser() {
  try {
    const response = yield call(apifuntion?.getApi, `home`);

    // const {data} = response;

    // Dispatch the success action with the response data
    yield put(fetchUserDataSuccess(response));
  } catch (error) {
    const {message} = error;
    // console.log('UUUUUUUUUUUUerrsttttttttttttt', error);
    yield call(
      showSnack,
      message || 'Something went wrong please try again!',
      null,
      true,
    );

    // Dispatch the failure action if the API call fails
    yield put(
      fetchUserDataFailure(message || 'Something went wrong please try again!'),
    );
  }
}

function* fetchUser() {
  try {
    const response = yield call(apifuntion.getApi, 'home');
    yield put(fetchUserDataSuccess(response));
  } catch (error) {
    yield call(showSnack, message, null, true);
    yield put(fetchUserDataFailure(message));
  }
}

// Watcher saga to watch for the request action and call fetchUserSaga
export function* watchFetchUser() {
  yield takeLatest(FETCH_USER_DATA_REQUEST, fetchUser);
}

// tack letest
// Watches for specific action types and runs the associated saga
