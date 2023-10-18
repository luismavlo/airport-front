import { TableFlightsAdminView } from './../components/TableFlightsAdminView'
import { useSelector } from 'react-redux'

export const AdminFlights = () => {

  const { isLoading, flights } = useSelector(state => state.flights)

  return (
    <section>
      <h2> Listado de Vuelos </h2>
      {
        isLoading 
          ? "Cargando..." 
          : <TableFlightsAdminView flights={flights} />
      }

    </section>
  )
}
