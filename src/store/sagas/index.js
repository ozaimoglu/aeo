import { all, call, put, takeEvery } from 'redux-saga/effects';
import { fetchUnitsRequest, fetchUnitsSuccess, fetchUnitsFailure } from '../reducers/unitsReducer';
import unitsData from '../../age-of-empires-units.json';

function* fetchUnits() {
  try {
    // Mock API call
    const units = unitsData.units;
    yield put(fetchUnitsSuccess(units));
  } catch (error) {
    yield put(fetchUnitsFailure(error.toString()));
  }
}

function* watchFetchUnits() {
  yield takeEvery(fetchUnitsRequest.type, fetchUnits);
}

export default function* rootSaga() {
  yield all([call(watchFetchUnits)]);
}
