import { useState, useEffect } from "react"
import { FlightsView, AdminFlights, CreateFlightView } from './../views'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { getFlights } from "../../store/slices/flights"

export const FlightsAdminPage = () => {

  const [showView, setShowView] = useState('start');
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch( getFlights()  )
  }, [dispatch])
  

  const navigate = useNavigate();

  const goTvScreen = () => {
    navigate("/flights/view-tv-flights")
  }

  return (
    <>
      <h1>Panel Administrador de vuelos</h1>

      <div className="breadcrumb">
        <button className="breadcrumb-button" onClick={() => setShowView('start')} >Inicio</button>
        <button className="breadcrumb-button" onClick={() => setShowView('adminFlights')}>Administrar Vuelos</button>
        <button className="breadcrumb-button" onClick={() => setShowView('createFlights')}>Crear Vuelos</button>
        <button className="breadcrumb-button" onClick={() => goTvScreen()}>Vuelos en TV</button>
      </div>

      <div className="page-container">
        {
          showView === 'start'
          && <FlightsView />
        }

        {
          showView === 'adminFlights'
          && <AdminFlights />
        }

        {
          showView === 'createFlights'
          && <CreateFlightView />
        }
      </div>
    </>
  )
}
