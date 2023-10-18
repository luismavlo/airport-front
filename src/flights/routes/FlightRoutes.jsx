import { Navigate, Route, Routes } from "react-router-dom"
import { FlightsTvPage } from "../pages/FlightsTvPage"
import { FlightLayout } from "../layout/FlightLayout"

export const FlightRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<FlightLayout />} />
      <Route path="/view-tv-flights" element={<FlightsTvPage />} />

      <Route path="/" element={ <Navigate to="/" /> } />
    </Routes>
  )
}