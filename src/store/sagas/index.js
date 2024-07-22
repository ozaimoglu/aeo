import { put, takeEvery } from "redux-saga/effects";
import {
  fetchUnitsRequest,
  fetchUnitsSuccess,
  fetchUnitsFailure
} from "../slices/unitSlice";
import unitsData from "../../age-of-empires-units.json";

function* fetchUnitsSaga() {
  try {
    const { units } = unitsData;
    yield put(fetchUnitsSuccess(units));
  } catch (error) {
    yield put(fetchUnitsFailure(error.message));
  }
}

function* rootSaga() {
  yield takeEvery(fetchUnitsRequest.type, fetchUnitsSaga);
}

export default rootSaga;
