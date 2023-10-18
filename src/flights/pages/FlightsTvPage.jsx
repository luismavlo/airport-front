import { HeaderTvScreen } from "../components/HeaderTvScreen"
import { TableFlightsTvScreen } from "../components/TableFlightsTvScreen"


export const FlightsTvPage = () => {

  return (
    <section className="airport">
      <HeaderTvScreen />
      <div className="content-table-tv">
        <TableFlightsTvScreen />
      </div>
    </section>
  )
}
