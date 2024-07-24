import { put, takeEvery } from "redux-saga/effects";
import {
  fetchUnitsRequest,
  fetchUnitsSuccess,
  fetchUnitsFailure
} from "../slices/unitSlice";
import unitsData from "../../age-of-empires-units.json";

// fetch units data from unitsData and dispatch fetchUnitsSuccess action
function* fetchUnitsSaga() {
  try {
    const { units } = unitsData;
    yield put(fetchUnitsSuccess(units));
  } catch (error) {
    yield put(fetchUnitsFailure(error.message));
  }
}

// listen for fetchUnitsRequest action and call fetchUnitsSaga
function* rootSaga() {
  yield takeEvery(fetchUnitsRequest.type, fetchUnitsSaga);
}

export default rootSaga;
