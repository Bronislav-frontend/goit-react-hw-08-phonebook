import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";
import s from './Navigation.module.css'

export default function Navigation () {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  return (
    <nav className={s.nav}>
      <NavLink to="/"
       exact 
       className={s.link} 
       activeClassName={s.active}
       >
        Main Page
      </NavLink>
      {isLoggedIn && (
        <NavLink
        to="/contacts" exact
        className={s.link} 
        activeClassName={s.active}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}