import { createSlice } from "@reduxjs/toolkit";

const unitSlice = createSlice({
  name: "units",
  initialState: {
    units: [],
    loading: false,
    error: null
  },
  reducers: {
    fetchUnitsRequest(state) {
      return {
        ...state,
        loading: true,
        error: null
      };
    },
    fetchUnitsSuccess(state, action) {
      return {
        ...state,
        loading: false,
        units: action.payload
      };
    },
    fetchUnitsFailure(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    }
  }
});

export const { fetchUnitsRequest, fetchUnitsSuccess, fetchUnitsFailure } =
  unitSlice.actions;

export default unitSlice.reducer;
