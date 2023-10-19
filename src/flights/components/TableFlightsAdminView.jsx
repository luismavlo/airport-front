import PropTypes from 'prop-types';
import { aproveFlight } from './../services/apiFlights.js'
import { useDispatch } from 'react-redux';
import { getFlights } from './../../store/slices/flights' 
import { useEffect } from 'react';

export const TableFlightsAdminView = ({ flights, socket }) => {

  const dispatch = useDispatch()

  const startAproveFlight = async(id) => {
    // const result = await aproveFlight(id)
    socket.emit("change-status-flight", "soy una data viajadora")
    console.log(id)
    dispatch( getFlights() )

  }

  useEffect(() => {
    socket.on("render-change-status", (data) => {
      console.log(data)
    })
  }, [socket])
  

  const cancelFlight = (id) => {

  }

  const completFlight = (id) => {

  }
  

  return (
    <table className="table table-white" style={{ fontSize: "1.5rem" }}>
      <thead className="bg-green" >
        <tr >
          <th>No. Vuelo</th>
          <th>Origen</th>
          <th>Destino</th>
          <th>Hora de Salida</th>
          <th>Avión</th>
          <th>Status</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {
          flights && flights.map((flight) => (
            <tr key={flight.id}>
              <td>{ flight.id }</td>
              <td>{ flight.origin.name }</td>
              <td>{ flight.destination.name }</td>
              <td>{ flight.departureDate }</td>
              <td className="table-avion">{ flight.plane.plane_number }</td>
              <td className="table-status__pending">{ flight.status }</td>
              <td>
                <button onClick={() => startAproveFlight(flight.id)} className="btn btn-primary" style={{ margin: "1px", width: "8rem" }}>Aprobar</button>
                <button onClick={() => cancelFlight(flight.id)} className="btn btn-primary" style={{ margin: "1px", width: "8rem" }}>Cancelar</button>
                <button onClick={() => completFlight(flight.id)} className="btn btn-primary" style={{ margin: "1px", width: "8rem" }}>Completar</button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

TableFlightsAdminView.propTypes = {
  flights: PropTypes.array,
  socket: PropTypes.any,
}
