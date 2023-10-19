import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { getFlights } from '../../store/slices/flights';
import { useSocket } from '../../common/hooks/useSocket';

export const TableFlightsTvScreen = () => {

  const dispatch = useDispatch()
  const { socket } = useSocket("http://localhost:3000");

  useEffect(() => {
    socket.on("render-change-status", (data) => {
      console.log('data desde el tv: ', data)
    })
  }, [socket])
  

  useEffect(() => {
    dispatch( getFlights() )
  }, [dispatch])
  

  const { flights } = useSelector(state => state.flights) 

  return (
    <table className="table" >
      <thead >
        <tr >
          <th>No. Vuelo</th>
          <th>Origen</th>
          <th>Destino</th>
          <th>Hora de Salida</th>
          <th>Avión</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {
          flights.map(flight => ( 
            <tr key={flight.id}>
              <td>{ flight.id }</td>
              <td>{ flight.origin.name }</td>
              <td>{ flight.destination.name }</td>
              <td>{ flight.departureDate }</td>
              <td className="table-avion">{ flight.plane.plane_number }</td>
              <td>{ flight.status }</td>
           </tr>
          ))
        }
      </tbody>
    </table>
  )
}
