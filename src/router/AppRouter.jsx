import { Navigate ,Route, Routes } from 'react-router-dom';
import { FlightRoutes } from '../flights/routes/FlightRoutes';

export const AppRouter = () => {

  return (
    <Routes>
      <Route path='/flights/*' element={ <FlightRoutes /> } />

      <Route path='/*' element={ <Navigate to="/flights" /> } />
    </Routes>
  )

}