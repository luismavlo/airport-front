import { setFlights, startLoadingFlights } from "./flights.slice"
import { getAllFlights } from './../../../flights/services/apiFlights.js'

export const getFlights = () => {
  return async(dispatch) => {
    dispatch( startLoadingFlights() )
    const flights = await getAllFlights()
    dispatch( setFlights(flights) )
  }
}