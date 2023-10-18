import { NavLink } from 'react-router-dom'

export const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <a href="#">
            <span className="icon"><ion-icon name="cube"></ion-icon></span>
            <span className="title">Brand Name</span>
          </a>
        </li>
        <li>
          <NavLink to="/hola" className={({ isActive }) => isActive ? 'nav-active' : ''}>
            <span className="icon"><ion-icon name="home"></ion-icon></span>
            <span className="title">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/flights" className={({ isActive }) => isActive ? 'nav-active' : ''}>
            <span className="icon"><ion-icon name="airplane"></ion-icon></span>
            <span className="title">Flights</span>
          </NavLink>
        </li>     
        <li>
          <NavLink to="/passengers" className={({ isActive }) => isActive ? 'nav-active' : ''}>
            <span className="icon"><ion-icon name="contacts"></ion-icon></span>
            <span className="title">Passengers</span>
          </NavLink>
        </li>  
        <li>
          <NavLink to="/tickets" className={({ isActive }) => isActive ? 'nav-active' : ''}>
            <span className="icon"><ion-icon name="film"></ion-icon></span>
            <span className="title">Tickets</span>
          </NavLink>
        </li>  
           
      </ul>
    </div>
  )
}
