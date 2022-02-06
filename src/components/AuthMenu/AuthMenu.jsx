import { NavLink } from "react-router-dom";
import s from './AuthMenu.module.css'


export default function AuthMenu () {
   return (
     <div>
       <NavLink
         to="/register"
         exact
         className={s.link}
         activeClassName={s.active}
       >
         Register
       </NavLink>
       <NavLink to="/login" exact className={s.link} activeClassName={s.active}>
         Login
       </NavLink>
     </div>
   );  
}