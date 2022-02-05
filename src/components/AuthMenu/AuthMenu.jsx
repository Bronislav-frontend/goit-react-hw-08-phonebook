import { NavLink } from "react-router-dom";
export default function AuthMenu () {
   return (
     <div>
       <NavLink
          to="/register"
          exact
       >
          Register
       </NavLink>
       <NavLink
          to="/login"
          exact
       >
          Login
       </NavLink>
     </div>
   );  
}