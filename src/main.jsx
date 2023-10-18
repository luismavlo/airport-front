import React from 'react'
import ReactDOM from 'react-dom/client'
import AirportApp from './AirportApp.jsx'
import { Provider } from 'react-redux'
import { store } from './store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store }>
      <AirportApp />
    </Provider>
  </React.StrictMode>,
)
