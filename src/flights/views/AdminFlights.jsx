import { TableFlightsAdminView } from './../components/TableFlightsAdminView'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types';

export const AdminFlights = ({ socket }) => {

  const { isLoading, flights } = useSelector(state => state.flights)

  return (
    <section>
      <h2> Listado de Vuelos </h2>
      {
        isLoading 
          ? "Cargando..." 
          : <TableFlightsAdminView flights={flights} socket={socket} />
      }

    </section>
  )
}

AdminFlights.propTypes = {
  socket: PropTypes.any,
}
