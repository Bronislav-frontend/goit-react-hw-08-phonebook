import { NavLink } from "react-router-dom";

export default function Navigation () {
  return (
    <nav>
      <NavLink to='/' exact>
        Main Page
      </NavLink>
      <NavLink to='/contacts'>
        Contacts
      </NavLink>
    </nav>
  )
}