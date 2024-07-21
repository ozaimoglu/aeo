import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  units: [],
  loading: false,
  error: null,
};

const unitsSlice = createSlice({
  name: 'units',
  initialState,
  reducers: {
    fetchUnitsRequest: (state) => {
      state.loading = true;
    },
    fetchUnitsSuccess: (state, action) => {
      state.loading = false;
      state.units = action.payload;
    },
    fetchUnitsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchUnitsRequest, fetchUnitsSuccess, fetchUnitsFailure } = unitsSlice.actions;
export default unitsSlice.reducer;
