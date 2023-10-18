import { configureStore } from '@reduxjs/toolkit'
import { flightsSlice } from './slices/flights'

export const store = configureStore({
  reducer: {
    flights: flightsSlice.reducer
  },
})