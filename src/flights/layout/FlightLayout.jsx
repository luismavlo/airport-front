import { Navigation } from "../../common/components/Navigation"
import { FlightsAdminPage } from "../pages/FlightsAdminPage"

export const FlightLayout = () => {
  return (
    <>
      <Navigation />
      <section className="main">
        <FlightsAdminPage />
      </section>
    </>
  )
}
