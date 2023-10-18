import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './router/AppRouter';

function AirportApp() {

  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  )
}

export default AirportApp
