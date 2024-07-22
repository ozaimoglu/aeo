import { combineReducers } from "redux";
import unitsReducer from "./unitSlice";

const rootReducer = combineReducers({
  units: unitsReducer
});

export default rootReducer;
