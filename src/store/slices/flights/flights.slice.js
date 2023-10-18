import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  flights: [],
  isLoading: false,
}

export const flightsSlice = createSlice({
  name: 'flights',
  initialState,
  reducers: {
    startLoadingFlights: (state) => {
      state.isLoading = true;
    },
    setFlights: (state, action) => {
      state.isLoading = false;
      state.flights = action.payload;
    }
  },
})


export const { startLoadingFlights, setFlights } = flightsSlice.actions



